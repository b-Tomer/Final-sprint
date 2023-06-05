import { useParams } from 'react-router-dom'
import { TaskMenu } from './task-menu.jsx'
import { TaskMainDetails } from './task-main-details.jsx'
import { TaskHeader } from './task-header.jsx'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as X } from '../../assets/img/icons/x.svg'




export function TaskDetails({
    taskId,
    groupId,
    boardId,
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
                <button
                    className="task-details-close"
                    onClick={simpleCloseModal}  >
                    <X className="task-icon-img" />
                </button>
                <TaskHeader task={task} group={group} />
                <TaskMainDetails boardId={boardId} task={task} groupId={groupId} />
                <TaskMenu task={task} />


            </section>
        </div>
    )
}
