import { TaskData } from './task-data.jsx'
import { TaskMainContent } from './task-main-content.jsx'
import { TaskMenu } from './task-menu.jsx'

export function TaskMainDetails({ task, group }) {
    return (
        <section className="task-main-detiails">
            <TaskData task={task} />
            <TaskMainContent task={task} />
        </section>
    )
}
