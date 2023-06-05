import { ReactComponent as Description } from '../../assets/img/icons/description.svg'
import { ReactComponent as Activity } from '../../assets/img/icons/activity.svg'
import { TaskChecklist } from '../../cmps/task/task-checklist.jsx'
import { TaskAttachments } from './task-attachments.jsx'

export function TaskMainContent({ task, boardId, groupId }) {
    if (!task) return

    return (
        <section className="task-main-content">
            <div className="description">
                <div className="description-title">
                    <Description className="task-content-icon" />
                    <h3>Description</h3>
                </div>
                {!task.description && (
                    <div className='description-container'>
                        <textarea
                            placeholder="Add a more detailed description.."
                            className="main-content-text-area"
                        ></textarea>
                    </div>
                )}
                {task.description && (
                    <p className="description-content">{task.description}</p>
                )}
            </div>

            {task.attachments && (
                <TaskAttachments
                    groupId={groupId}
                    boardId={boardId}
                    task={task}
                />
            )}

            {task.checklists && (
                <div className="checklist">
                    <TaskChecklist task={task} />
                </div>
            )}

            <div className="activities">
                <div className="activities-title">
                    <Activity className="task-content-icon" />
                    <h3>Activity</h3>
                </div>
            </div>
        </section>
    )
}
