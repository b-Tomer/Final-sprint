import { ReactComponent as Checklist } from '../../assets/img/icons/checklist.svg'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { updateTask } from '../../store/task.actions'
import { ReactComponent as Trash } from '../../assets/img/icons/trash.svg'
import { utilService } from '../../services/util.service'

export function TaskChecklist({ task }) {
    const [currentTask, setCurrentTask] = useState(task)
    const [editing, setEditing] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const { boardId } = useParams()
    const { groupId } = useParams()
    const [todoTitle, setTodoTitle] = useState('')
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
    function openNewTodo() {
        setEditing(true)
    }

    async function onAddTodo(ev, checklist) {
        ev.preventDefault()
        checklist.todos.push({ id: utilService.makeId(), title: todoTitle })
        try {
            await updateTask(boardId, groupId, task)
        } catch (err) {
            console.log(err)
        } finally {
            closeNewTodo()
        }
    }

    async function onDeleteTodo(ev, checklist, todo) {
        ev.preventDefault()
        console.log(todo)
        console.log(checklist)
        const idx = checklist.todos.findIndex(
            (currTodo) => currTodo.id === todo.id
        )
        console.log(idx)
        checklist.todos.splice(idx, 1)
        // checklist.todos.push({ id: utilService.makeId(), title: todoTitle })
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

    if (!task.checklists || !task.checklists.length) return null
    return (
        <div className="checklists-container">
            {task.checklists.map((checklist) => {
                const doneTodos = checklist.todos.filter((todo) => todo.isDone)
                const progress =
                    (doneTodos.length / checklist.todos.length) * 100
                const isCompleted = progress === 100

                return (
                    <div className="checklist-container" key={checklist.id}>
                        <div className="checklist-title">
                            <Checklist className="task-content-icon" />
                            <h3>{checklist.title}</h3>
                            <button>Delete</button>
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
                            {checklist.todos.map((todo) => (
                                <div
                                    onMouseEnter={() =>
                                        handleMouseEnter(todo.id)
                                    }
                                    onMouseLeave={handleMouseLeave}
                                    className={`todo ${
                                        todo.isDone ? 'completed' : ''
                                    }`}
                                    key={todo.id}
                                >
                                    <input
                                        type="checkbox"
                                        id="todo"
                                        name="todo"
                                        checked={todo.isDone}
                                        onChange={() =>
                                            handleCheckboxChange(
                                                checklist.id,
                                                todo.id
                                            )
                                        }
                                    />
                                    <h3>{todo.title}</h3>
                                    {isHovered === todo.id && (
                                        <button
                                            onClick={(event) =>
                                                onDeleteTodo(
                                                    event,
                                                    checklist,
                                                    todo
                                                )
                                            }
                                            className="delete-todo-btn"
                                        >
                                            <Trash className="delete-todo-icon" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                        {!editing && (
                            <button
                                onClick={openNewTodo}
                                className="new-checklist-btn"
                            >
                                Add an item
                            </button>
                        )}
                        {editing && (
                            <div className="new-checklist-menu">
                                <form
                                    onSubmit={(event) =>
                                        onAddTodo(event, checklist)
                                    }
                                >
                                    <input
                                        placeholder="Add an item"
                                        onChange={handleTodoTitle}
                                    />
                                    <div className="todo-btns">
                                        <button className="add-item-btn">
                                            Add
                                        </button>
                                        <button
                                            className="cancel-btn"
                                            onClick={closeNewTodo}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
