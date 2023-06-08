import { Link } from "react-router-dom"
import { ReactComponent as Window } from '../../assets/img/icons/window.svg'

export function TaskHeader({ task, group, boardId }) {
    if (!task) return null
    return (
        <section className="task-header">
            <div className="task-header-title">
                <Window className="header-icon" />
                <textarea defaultValue={task.title} className="task-header-text"></textarea>

            </div>
            <p>in list
                <Link to={`board/${boardId}`}>
                    {group.title}
                </Link>
            </p>
        </section>
    )
}