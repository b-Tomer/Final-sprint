import { Link } from "react-router-dom"
import { GrCreditCard } from 'react-icons/gr'


export function TaskHeader({ task, group, boardId }) {
    // console.log(task);
    if (!task) return ''
    return (
        <section className="task-header">

            
            <div className="task-header-title">
                <GrCreditCard className="header-icon" />
                <textarea className="task-header-title">{task.title}</textarea>
            </div>
            <p>in list
                <Link to={`board/${boardId}`}>
                    {group.title}
                </Link>
            </p>

        </section>


    )
}