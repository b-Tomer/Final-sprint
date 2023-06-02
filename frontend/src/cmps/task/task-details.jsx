import { useParams } from 'react-router-dom'
import { TaskMenu } from './task-menu.jsx'
import { TaskMainDetails } from './task-main-details.jsx'
import { TaskHeader } from './task-header.jsx'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function TaskDetails() {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const { taskId, groupId, boardId } = useParams()
    const [task, setTask] = useState(null)
    const [group, setGroup] = useState(null)
    const groupIdx = board?.groups.findIndex((group) => group.id === groupId)
    const currTask = board.groups[groupIdx].tasks.find(task => task.id === taskId)
    useEffect(() => {
        setTask(currTask)
        setGroup(board.groups[groupIdx])
    }, [board])





    return (
        <section className="task-details-container">
            <TaskHeader task={task} group={group} boardId={boardId} />
            <TaskMainDetails task={task} groupId={groupId} />
            {/* <TaskMenu /> */}
        </section>
    )
}
