import { ReactComponent as Checklist } from '../../assets/img/icons/checklist.svg'
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { updateTask } from '../../store/task.actions'
import { ReactComponent as Trash } from '../../assets/img/icons/trash.svg'
import { utilService } from '../../services/util.service'
import { TodoEdit } from './checklists/todo-edit'
import { TodoContent } from './checklists/todo-content'
import { TodoNew } from './checklists/todo-new'

export function TaskChecklist({ task, setEditing, editing }) {
    const [currentTask, setCurrentTask] = useState(task)
    const [isHovered, setIsHovered] = useState(false)
    const [todoToEdit, setTodoToEdit] = useState(null)
    const { boardId } = useParams()
    const { groupId } = useParams()
    const [todoTitle, setTodoTitle] = useState('')
    const [checklistToEdit, setChecklistToEdit] = useState(null)
    const textareaRef = useRef(null)
    let progress
    
    useEffect(() => {}, [progress])

    const handleMouseEnter = (todoId) => {
        setIsHovered(todoId)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleCheckboxChange = async (checklistId, todoId) => {
        const updatedTask = { ...currentTask }
        const checklist = updatedTask.checklists.find(
            (checklist) => checklist.id === checklistId
        )
        const todo = checklist.todos.find((todo) => todo.id === todoId)
        todo.isDone = !todo.isDone
        setCurrentTask(updatedTask)
        await updateTask(boardId, groupId, updatedTask)
    }

    function closeNewTodo() {
        setEditing(false)
        setTodoTitle('')
    }

    async function openNewTodo(checklist) {
        await setEditing(true)
        await setChecklistToEdit(checklist.id)
        setTodoToEdit(null)
        textareaRef.current.focus()
    }

    async function onAddTodo(ev, checklist) {
        ev.preventDefault()
        checklist.todos.push({ id: utilService.makeId(), title: todoTitle })
        try {
            await updateTask(boardId, groupId, task)
        } catch (err) {
            console.log(err)
        } finally {
            setTodoTitle('')
            openNewTodo(checklist)
        }
    }

    async function onDeleteTodo(ev, checklist, todo) {
        ev.preventDefault()
        const idx = checklist.todos.findIndex(
            (currTodo) => currTodo.id === todo.id
        )
        checklist.todos.splice(idx, 1)
        try {
            await updateTask(boardId, groupId, task)
        } catch (err) {
            console.log(err)
        }
    }

    async function deleteChecklist(checklist) {
        const idx = task.checklists.findIndex(
            (currChecklist) => currChecklist.id === checklist.id
        )
        task.checklists.splice(idx, 1)
        try {
            await updateTask(boardId, groupId, task)
        } catch (err) {
            console.log(err)
        }
    }

    function handleTodoTitle(ev) {
        const { value } = ev.target
        setTodoTitle(value)
    }

    function selectTodoToEdit(ev, todo) {
        setTodoToEdit(todo.id)
        setEditing(false)
    }

    if (!task.checklists || !task.checklists.length) return null
    return (
        <div className="checklists-container">
            {task.checklists.map((checklist) => {
                const doneTodos = checklist.todos.filter((todo) => todo.isDone)
                let progress = (doneTodos.length / checklist.todos.length) * 100
                if (!checklist.todos.length) {
                    progress = 0
                }
                const isCompleted = progress === 100

                return (
                    <div className="checklist-container" key={checklist.id}>
                        <div className="checklist-title">
                            <Checklist className="task-content-icon" />
                            <h3>{checklist.title}</h3>
                            <button onClick={() => deleteChecklist(checklist)}>
                                Delete
                            </button>
                        </div>
                        <div className="progress-bar">
                            <span>{progress.toFixed(0)}%</span>
                            <div
                                className={`empty-bar ${
                                    isCompleted ? 'completed' : ''
                                }`}
                            >
                                <div
                                    className={`fill-bar ${
                                        progress === 100 ? 'completed' : ''
                                    }`}
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="todos">
                            {checklist.todos.map((todo) => {
                                if (todoToEdit !== todo.id) {
                                    return (
                                        <TodoContent
                                            todo={todo}
                                            handleMouseEnter={handleMouseEnter}
                                            handleMouseLeave={handleMouseLeave}
                                            handleCheckboxChange={
                                                handleCheckboxChange
                                            }
                                            checklist={checklist}
                                            isHovered={isHovered}
                                            onDeleteTodo={onDeleteTodo}
                                            Trash={Trash}
                                            key={todo.id}
                                            selectTodoToEdit={selectTodoToEdit}
                                        />
                                    )
                                } else if (todoToEdit === todo.id) {
                                    return (
                                        <TodoEdit
                                            todo={todo}
                                            key={todo.id}
                                            setTodoToEdit={setTodoToEdit}
                                            boardId={boardId}
                                            groupId={groupId}
                                            task={task}
                                            checklist={checklist}
                                            setEditing={setEditing}
                                        />
                                    )
                                }
                            })}
                        </div>
                        <TodoNew
                            checklist={checklist}
                            editing={editing}
                            openNewTodo={openNewTodo}
                            checklistToEdit={checklistToEdit}
                            onAddTodo={onAddTodo}
                            textareaRef={textareaRef}
                            handleTodoTitle={handleTodoTitle}
                            todoTitle={todoTitle}
                            closeNewTodo={closeNewTodo}
                        />
                    </div>
                )
            })}
        </div>
    )
}
