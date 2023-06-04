import { useParams } from 'react-router-dom'
import { TaskMenu } from './task-menu.jsx'
import { TaskMainDetails } from './task-main-details.jsx'
import { TaskHeader } from './task-header.jsx'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function TaskDetails({
    taskId,
    groupId,
    boardId,
    isTaskDetailsOpen,
    setIsTaskDetailsOpen,
}) {
    const navigate = useNavigate()
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [task, setTask] = useState(null)
    const [group, setGroup] = useState(null)
    const taskOverlayRef = useRef()
    const groupIdx = board?.groups.findIndex((group) => group.id === groupId)
    const currTask = board.groups[groupIdx].tasks.find(
        (task) => task.id === taskId
    )
    useEffect(() => {
        setTask(currTask)
        setGroup(board.groups[groupIdx])
    }, [board])

    function closeModal(ev, ref) {
        if (ref.current !== ev.target) {
            // console.log(ev.target)
            // console.log(ref.current)
            return
        }
        ev.stopPropagation()
        ev.preventDefault()
        setIsTaskDetailsOpen(false)
        navigate(`/board/${boardId}`)
    }

    function simpleCloseModal() {
        setIsTaskDetailsOpen(false)
        navigate(`/board/${boardId}`)
    }

    return (
        <div
            className="modal-overlay"
            ref={taskOverlayRef}
            onClick={(ev) => {
                closeModal(ev, taskOverlayRef)
            }}
        >
            <section className="task-details-container">
                <TaskHeader task={task} group={group} />
                <TaskMainDetails task={task} group={group} />
                <TaskMenu />
                <button
                    className="task-details-close"
                    onClick={simpleCloseModal}
                >
                    Close
                </button>
            </section>
        </div>
    )
}
