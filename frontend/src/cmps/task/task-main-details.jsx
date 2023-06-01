import { TaskData } from "./task-data.jsx";
import { TaskMainContent } from "./task-main-content.jsx";


export function TaskMainDetails({ task, groupId }) {

    return (
        <section className="task-main-detiails">
            <TaskData />
            <TaskMainContent task={task} />

        </section>
    )
}