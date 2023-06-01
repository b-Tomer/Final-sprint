import { TaskData } from "./task-data.jsx";
import { TaskMainContent } from "./task-main-content.jsx";
import { TaskMenu } from "./task-menu.jsx";


export function TaskMainDetails({ task, groupId }) {

    return (
        <section className="task-main-detiails">
            <TaskData />
            <TaskMainContent task={task} />
            <TaskMenu />

        </section>
    )
}