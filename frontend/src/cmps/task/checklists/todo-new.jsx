import { useState } from 'react'
import { updateTask } from '../../../store/task.actions'

export function TodoNew({
    editing,
    openNewTodo,
    checklistToEdit,
    onAddTodo,
    textareaRef,
    handleTodoTitle,
    todoTitle,
    closeNewTodo,
    checklist,
}) {
    return (
        <>
            {(!editing || checklistToEdit !== checklist.id) && (
                <button
                    onClick={() => openNewTodo(checklist)}
                    className="new-checklist-btn"
                >
                    Add an item
                </button>
            )}
            {editing && checklistToEdit === checklist.id && (
                <div className="new-checklist-menu">
                    <form onSubmit={(event) => onAddTodo(event, checklist)}>
                        <textarea
                            ref={textareaRef}
                            placeholder="Add an item"
                            onChange={handleTodoTitle}
                            value={todoTitle}
                        />
                        <div className="todo-btns">
                            <button className="add-item-btn">Add</button>
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
        </>
    )
}
