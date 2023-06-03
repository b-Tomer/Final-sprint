import { ReactComponent as Description } from '../../assets/img/icons/description.svg'
import { ReactComponent as Activity } from '../../assets/img/icons/activity.svg'
import { TaskChecklist } from '../../cmps/task/task-checklist'


export function TaskMainContent({ task, groupId }) {
    console.log('task in main constent', task)


    return (
        <section className="task-main-content">
            <div className="description">
                <div className="description-title" >
                    <Description className="task-content-icon" />
                    <h3>Description</h3>
                </div>
                <div>
                    <textarea placeholder='Add a more detailed description..' className="main-content-text-area"></textarea>
                </div>
            </div>
            <div className="checklist">
                <TaskChecklist task={task} />
            </div>

            <div className="activities">
                <div className="activities-title" >
                    <Activity className="task-content-icon" />
                    <h3>Activity</h3>
                </div>
            </div>

        </section>
    )

}