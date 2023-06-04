import { Link } from "react-router-dom"
import { ReactComponent as Window } from '../../assets/img/icons/window.svg'
import { ReactComponent as Eye } from '../../assets/img/icons/eye.svg'
import { TaskCover } from "./task-cover"

export function TaskHeader({ task, group, boardId }) {
    // console.log(task);
    if (!task) return ''
    return (
        <>
            {/* <TaskCover task={task} /> */}
            <section className="task-header">
                <div className="task-header-title">
                    <Window className="header-icon" />
                    <textarea defaultValue={task.title} className="task-header-title"></textarea>

                </div>
                <p>in list
                    <Link to={`board/${boardId}`}>
                        {group.title}
                    </Link>
                    <Eye className="eye-icon" />
                </p>
            </section>
        </>
    )
}