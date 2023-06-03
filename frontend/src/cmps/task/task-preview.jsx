import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Stylus } from '../../assets/img/icons/stylus.svg'
import { TaskEditor } from './task-editor'
import { useClickOutside } from '../../customHooks/useClickOutside'
import { TaskIcons } from './task-icons'
import { utilService } from '../../services/util.service'
import { TaskDetails } from './task-details'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

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
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)
    const taskPreviewRef = useRef()

    useClickOutside(menuRef, toggleEditModal)

    function onOpenMenu() {
        setIsMenuOpen(!isMenuOpen)
        console.log(isMenuOpen)
    }

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

    function getLabelColor(id) {
        console.log(board)
        if (!board.labels) return
        const matchedLabel = board.labels.find((label) => label.id === id)
        // console.log(matchedLabel.color)
        return matchedLabel.color
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
            {isMenuOpen && (
                <TaskEditor taskId={task.id} onRemoveTask={onRemoveTask} />
            )}
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
                {task?.labelIds && (
                    <span className="task-labels">
                        {task.labelIds.map((label) => (
                            <button
                                key={label}
                                style={{
                                    backgroundColor: getLabelColor(label),
                                }}
                                className="task-labels-btn"
                            >
                                {label}
                            </button>
                        ))}
                    </span>
                )}
                <span className="task-title" onClick={onOpenTaskDetails}>
                    {task.title}
                </span>
                <TaskIcons task={task} groupId={groupId} boardId={boardId} />
            </div>
        </div>
    )
}
