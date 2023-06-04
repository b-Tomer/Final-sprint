import { TaskData } from './task-data.jsx'
import { TaskMainContent } from './task-main-content.jsx'
import { TaskMenu } from './task-menu.jsx'

export function TaskMainDetails({ task, group }) {
<<<<<<< HEAD

=======
    // console.log('kkkkkkkkkkkkkkkkkkkkk', task)
>>>>>>> 8a3e73d0456581f4064cc02a7cb1b96af3a86add
    return (
        <section className="task-main-detiails">
            <TaskData task={task} />
            <TaskMainContent task={task} />
        </section>
    )
}
