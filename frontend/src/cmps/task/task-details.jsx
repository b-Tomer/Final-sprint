import { TaskMenu } from './task-menu.jsx'
import { TaskMainDetails } from './task-main-details.jsx'
import { TaskHeader } from './task-header.jsx'
import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TaskCover } from './task-cover.jsx'

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
    const [editing, setEditing] = useState(false)
    const [dynamicCmpName, setDynamicCmpName] = useState(null)

    const taskOverlayRef = useRef()
    const groupIdx = board?.groups.findIndex((group) => group.id === groupId)
    const currTask = board.groups[groupIdx].tasks.find(
        (task) => task.id === taskId
    )
    const [layout, setLayout] = useState(undefined)
    const [scroll, setScroll] = useState(true)
    const elementRef = useRef(null)

    useEffect(() => {
        setTask(currTask)
        setGroup(board.groups[groupIdx])
    }, [board])

    const measureHeight = () => {
        if (elementRef.current) {
            const height = elementRef.current.clientHeight
        }
    }

    useLayoutEffect(() => {
        measureHeight()

        const handleResize = () => {
            measureHeight()
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
            <section className="task-details-container" ref={elementRef}>
                <TaskCover simpleCloseModal={simpleCloseModal} task={task} />
                <div className="task-details-secondry-container">
                    <TaskHeader task={task} group={group} />
                    <TaskMainDetails
                        boardId={boardId}
                        task={task}
                        groupId={groupId}
                        setEditing={setEditing}
                        editing={editing}
                        setDynamicCmpName={setDynamicCmpName}
                    />
                    <TaskMenu
                        task={task}
                        setEditing={setEditing}
                        dynamicCmpName={dynamicCmpName}
                        setDynamicCmpName={setDynamicCmpName}
                    />
                </div>
            </section>
        </div>
    )
}
