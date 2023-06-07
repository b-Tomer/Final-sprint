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
    onExpandLabels,
    isLabelsExpand,
    labelsFont,
    provided,
    isDragging,
}) {
    const navigate = useNavigate()
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // const menuRef = useRef(null)
    const taskPreviewRef = useRef()

    // useClickOutside(menuRef, toggleEditModal)

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
        if (taskEdit) return setTaskEdit(null)
        ev.stopPropagation()
        // ev.preventDefault()
        const pos = utilService.getModalPositionOnTop(ref)
        setTaskEdit({ pos, task, groupId })
    }

    function getLabelBgColor(id) {
        if (!board.labels) return
        const matchedLabel = board.labels.find((label) => label.id === id)
        return matchedLabel.color
    }

    function getLabelTitle(id) {
        if (!board.labels) return
        const matchedLabel = board.labels.find((label) => label.id === id)
        return matchedLabel.title
    }

    function toggleLabelExpantion(ev, id) {
        ev.stopPropagation()
        ev.preventDefault()
        onExpandLabels(ev)
        if (isLabelsExpand) {
            ev.target.innerText = getLabelTitle(id)
        } else {
            ev.target.innerText = ''
        }
    }

    return (
        <div
            className={`task-draggable-wrapper ${
                isDragging ? 'dragging' : ''
            } `}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
        >
            <div
                className="task-container"
                ref={taskPreviewRef}
                onClick={onOpenTaskDetails}
            >
                <button
                    className="btn-task-show-details"
                    onClick={(ev) => {
                        toggleEditModal(ev, taskPreviewRef)
                    }}
                >
                    <Stylus className="edit-icon" />
                </button>

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
                            {task.labelIds.map((labelId) => (
                                <button
                                    onClick={(ev) => {
                                        toggleLabelExpantion(ev, labelId)
                                    }}
                                    key={labelId}
                                    style={{
                                        backgroundColor:
                                            getLabelBgColor(labelId),
                                        fontSize: labelsFont,
                                    }}
                                    className="task-labels-btn"
                                >
                                    {getLabelTitle(labelId)}
                                </button>
                            ))}
                        </span>
                    )}
                    <span className="task-title" onClick={onOpenTaskDetails}>
                        {task.title}
                    </span>
                    <TaskIcons
                        task={task}
                        groupId={groupId}
                        boardId={boardId}
                    />
                </div>
            </div>
        </div>
    )
}
