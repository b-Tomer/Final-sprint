import { ReactComponent as Activity } from '../../assets/img/icons/activity.svg'
import { TaskChecklist } from '../../cmps/task/task-checklist.jsx'
import { TaskAttachments } from './task-attachments.jsx'
import { TaskDescription } from './task-description'

export function TaskMainContent({
    task,
    boardId,
    groupId,
    setEditing,
    editing,
}) {
    if (!task) return

    return (
        <section className="task-main-content">
            <TaskDescription boardId={boardId} groupId={groupId} task={task} />

            {task.attachments && (
                <TaskAttachments
                    groupId={groupId}
                    boardId={boardId}
                    task={task}
                />
            )}

            {task.checklists && (
                <div className="checklist">
                    <TaskChecklist
                        boardId={boardId}
                        groupId={groupId}
                        task={task}
                        setEditing={setEditing}
                        editing={editing}
                    />
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
