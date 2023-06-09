import { ReactComponent as Activity } from '../../assets/img/icons/activity.svg'
import { TaskChecklist } from '../../cmps/task/task-checklist.jsx'
import { TaskActivity } from './task-activity'
import { TaskAttachments } from './task-attachments.jsx'
import { TaskDescription } from './task-description'
import { useState } from 'react'

export function TaskMainContent({
    task,
    boardId,
    groupId,
    setEditing,
    editing,
}) {
    const [isShowAll, setIsShowAll] = useState(false)

    function toggleShowAll() {
        setIsShowAll(!isShowAll)
    }

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
                    <button onClick={toggleShowAll} className="show-all">
                        {!isShowAll ? 'Hide activities' : 'Show all activities'}
                    </button>
                </div>
                <TaskActivity
                    taskId={task.id}
                    setIsShowAll={setIsShowAll}
                    isShowAll={isShowAll}
                />
            </div>
        </section>
    )
}
