import { useState } from 'react'
import { updateTask } from '../../../store/task.actions'

export function TodoEdit({
    todo,
    setTodoToEdit,
    groupId,
    boardId,
    task,
    checklist,
    setEditing,
}) {
    const [todoToUpdate, setTodoToUpdate] = useState(todo)

    function closeNewTodo() {
        setTodoToEdit(null)
    }

    async function onFinishEditing(ev) {
        ev.preventDefault()
        const idx = checklist.todos.findIndex(
            (currTodo) => currTodo.id === todo.id
        )
        checklist.todos[idx] = todoToUpdate
        try {
            await updateTask(boardId, groupId, task)
            closeNewTodo()
        } catch (error) {
            console.log('cant update task')
        }
    }

    function onEditTodo(ev) {
        const value = ev.target.value
        setTodoToUpdate((prevTodo) => ({
            ...prevTodo,
            title: value,
        }))
    }

    return (
        <div className="new-checklist-menu">
            <form onSubmit={(event) => onFinishEditing(event)}>
                <textarea onChange={onEditTodo} value={todoToUpdate.title} />
                <div className="todo-btns">
                    <button className="add-item-btn">Save</button>
                    <button className="cancel-btn" onClick={closeNewTodo}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}
