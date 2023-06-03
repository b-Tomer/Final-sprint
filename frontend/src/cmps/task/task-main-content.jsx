import { ReactComponent as Description } from '../../assets/img/icons/description.svg'
import { ReactComponent as Checklist } from '../../assets/img/icons/checklist.svg'
import { ReactComponent as Activity } from '../../assets/img/icons/activity.svg'


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
                <div className="checklist-title" >
                    <Checklist className="task-content-icon" />
                    <h3>Checklist</h3>
                </div>
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