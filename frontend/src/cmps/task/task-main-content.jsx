import { ReactComponent as Activity } from '../../assets/img/icons/activity.svg'
import { TaskChecklist } from '../../cmps/task/task-checklist.jsx'
import { TaskActivity } from './task-activity'
import { TaskAttachments } from './task-attachments.jsx'
import { TaskDescription } from './task-description'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { TaskLocation } from './task-location'

export function TaskMainContent({
    task,
    boardId,
    groupId,
    setEditing,
    editing,
}) {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [isShowAll, setIsShowAll] = useState(true)
    const [location, setLocation] = useState(null)
    const [isLocOpen, setIsLocOpen] = useState(false)

    function toggleShowAll() {
        setIsShowAll(!isShowAll)
    }

    if (!task) return
    return (
        <section className="task-main-content">
            <TaskDescription boardId={boardId} groupId={groupId} task={task} />


            {task.attachments && task.attachments.length > 0 && (
                <TaskAttachments
                    groupId={groupId}
                    boardId={boardId}
                    task={task}
                />
            )}
            <TaskLocation
                boardId={boardId}
                groupId={groupId}
                task={task}
                location={location}
                setLocation={setLocation}
                setIsLocOpen={setIsLocOpen}
                isLocOpen={isLocOpen}
            />

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




            {board.activities && (
                <div className="activities">
                    <div className="activities-title">
                        <Activity className="task-content-icon" />
                        <h3>Activity</h3>
                        {board.activities &&
                            board.activities.length > 0 &&
                            board.activities.filter(
                                (activity) => activity.taskId === task.id
                            ).length > 5 && (
                                <button
                                    onClick={toggleShowAll}
                                    className="show-all"
                                >
                                    {!isShowAll
                                        ? 'Show less activities'
                                        : 'Show all activities'}
                                </button>
                            )}
                    </div>
                    <TaskActivity
                        taskId={task.id}
                        setIsShowAll={setIsShowAll}
                        isShowAll={isShowAll}
                    />
                </div >
            )
            }
        </section >
    )
}
