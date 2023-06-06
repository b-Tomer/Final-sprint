import { TaskData } from './task-data.jsx'
import { TaskMainContent } from './task-main-content.jsx'
import { TaskMenu } from './task-menu.jsx'

export function TaskMainDetails({ task, groupId, boardId }) {


    return (
        <section className="task-main-details">
            <TaskData task={task} />
            <TaskMainContent boardId={boardId} groupId={groupId} task={task} />
        </section>
    )
}
