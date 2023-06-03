import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Stylus } from '../../assets/img/icons/stylus.svg'
import { TaskEditor } from './task-editor'
import { useClickOutside } from '../../customHooks/useClickOutside'
import { TaskIcons } from './task-icons'
import { utilService } from '../../services/util.service'
import { TaskDetails } from './task-details'
import { useParams } from 'react-router-dom'

export function TaskPreview({
    task,
    onRemoveTask,
    boardId,
    groupId,
    taskEdit,
    setTaskEdit,
    setIsTaskDetailsOpen,
    isTaskDetailsOpen,
}) {
    const navigate = useNavigate()

    // const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)
    const taskPreviewRef = useRef()

    useClickOutside(menuRef, toggleEditModal)

    // function onOpenMenu() {
    //     setIsMenuOpen(!isMenuOpen)
    //     console.log(isMenuOpen)
    // }

    // function onOpenMenu() {
    //     setIsMenuOpen(!isMenuOpen)
    //     console.log(isMenuOpen)
    // }
    // function onOpenMenu() {
    //     setIsMenuOpen(!isMenuOpen)
    //     console.log(isMenuOpen)
    // }

    function onOpenTaskDetails() {
        setIsTaskDetailsOpen(true)
        navigate(`/board/${boardId}/${groupId}/${task.id}`)
    }

    function onCloseTaskDetails() {
        setIsTaskDetailsOpen(false)
    }

    function toggleEditModal(ev, ref) {
        console.log(ref)
        if (taskEdit) return setTaskEdit(null)
        ev.stopPropagation()
        ev.preventDefault()
        const pos = utilService.getModalPositionOnTop(ref)
        setTaskEdit({ pos, task, groupId })
    }

    function toggleEditModal(ev, ref) {
        console.log(ref)
        if (taskEdit) return setTaskEdit(null)
        ev.stopPropagation()
        ev.preventDefault()
        const pos = utilService.getModalPositionOnTop(ref)
        setTaskEdit({ pos, task, groupId })
    }

    return (
        <div className="task-container" ref={taskPreviewRef}>
            <button
                className="btn-task-show-details"
                onClick={(ev) => {
                    toggleEditModal(ev, taskPreviewRef)
                }}
            >
                <Stylus className="edit-icon" />
            </button>
            {/* {isMenuOpen && (
                <TaskEditor taskId={task.id} onRemoveTask={onRemoveTask} />
            )} */}
            {(task.style?.bgColor || task.style?.backgroundImage) && (
                <div
                    className="task-header"
                    style={
                        !task.style?.backgroundImage
                            ? {
                                  backgroundColor: task.style.bgColor,
                              }
                            : { backgroundColor: '' }
                    }
                >
                    <img
                        className="task-header-cover-img"
                        src={task.style.backgroundImage}
                        alt=""
                    />
                </div>
            )}
            <div className="task-content">
                <span className="task-labels"></span>
                {
                    <span className="task-title" onClick={onOpenTaskDetails}>
                        {task.title}
                    </span>
                }
                <TaskIcons task={task} groupId={groupId} boardId={boardId} />
            </div>
        </div>
    )
}
