export function TodoContent({
    todo,
    handleMouseEnter,
    handleMouseLeave,
    handleCheckboxChange,
    checklist,
    isHovered,
    onDeleteTodo,
    Trash,
    selectTodoToEdit,
}) {

    // console.log(todo.isDone)
    return (
        <div
            onMouseEnter={() => handleMouseEnter(todo.id)}
            onMouseLeave={handleMouseLeave}
            className={`todo ${todo.isDone ? 'completed' : ''}`}
            key={todo.id}
        >
            <div className="todo-content">
                <input
                    type="checkbox"
                    id="todo"
                    name="todo"
                    checked={todo.isDone}
                    onChange={() => handleCheckboxChange(checklist.id, todo.id)}
                />
                <h3 onClick={(event) => selectTodoToEdit(event, todo)}>
                    {todo.title}
                </h3>
            </div>

            {isHovered === todo.id && (
                <button
                    onClick={(event) => onDeleteTodo(event, checklist, todo)}
                    className="delete-todo-btn"
                >
                    <Trash className="delete-todo-icon" />
                </button>
            )}
        </div>
    )
}
