import { Link } from "react-router-dom"
import { ReactComponent as Window } from '../../assets/img/icons/window.svg'
import { useState, useRef } from "react";
import { updateTask } from "store/task.actions";
import { useSelector } from "react-redux";


export function TaskHeader({ task, group, boardId }) {
    const [title, setTitle] = useState(task ? task.title : "")
    const inputRef = useRef(null)
    const { board } = useSelector((storeState) => storeState.boardModule)
    if (!task || !boardId || !task.title) return null



    async function handleSubmit(e) {
        e.preventDefault();
        const updatedTask = { ...task, title };
        try {
            await updateTask(board, group.id, updatedTask);
        } catch (error) {
            console.log(error);
        }
        inputRef.current.blur()
    }

    async function handleTitleChange(e) {
        const newTitle = e.target.value
        setTitle(newTitle)
    }

    function handleKeyUp(e) {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    }

    return (
        <section className="task-header">
            <div className="task-header-title">
                <Window className="header-icon" />
                <form onSubmit={handleSubmit}  >
                    <input
                        ref={inputRef}
                        defaultValue={task.title}
                        className="task-header-text"
                        onChange={handleTitleChange}
                        onKeyUp={handleKeyUp}
                    >
                    </input>
                </form>
            </div>
            <p>in list
                <Link to={`board/${boardId}`}>
                    {group.title}
                </Link>
            </p>
         
        </section>
    )
}
