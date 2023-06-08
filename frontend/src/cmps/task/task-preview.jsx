import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Stylus } from '../../assets/img/icons/stylus.svg'
import { TaskIcons } from './task-icons'
import { utilService } from '../../services/util.service'
import { useSelector } from 'react-redux'
import { updateTask } from '../../store/task.actions'

export function TaskPreview({
    task,
    boardId,
    groupId,
    taskEdit,
    setTaskEdit,
    setIsTaskDetailsOpen,
    onExpandLabels,
    isLabelsExpand,
    labelsFont,
    provided,
    isDragging,

    setSelectedTaskId,
}) {
    const navigate = useNavigate()
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [taskTitle, setTaskTitle] = useState(task.title)
    const taskPreviewRef = useRef()
    // const editRef = useRef()
    let elTask

    const taskPopStyle = {
        zIndex: 10,
    }

    const txtAreaStyle = {
        overflow: 'hidden',
        overflowWrap: 'break-word',
        resize: 'none',
        height: '90px',
        paddingLeft: '10px',
        border: 'none',
        boxShadow: 'none',
        outline: 'none',
        fontFamily: 'inherit',
        color: '#172b4d',
    }

    // useEffect(() => {
    //     taskPreviewRef.current.addEventListener('contextmenu', (ev) => {
    //         ev.preventDefault()
    //         toggleEditModal(ev, taskPreviewRef)
    //     })
    // }, [])

    function onOpenTaskDetails() {
        if (taskEdit) return
        setIsTaskDetailsOpen(true)
        navigate(`/board/${boardId}/${groupId}/${task.id}`)
    }

    function onCloseTaskDetails() {
        setIsTaskDetailsOpen(false)
    }

    function toggleEditModal(ev, ref) {
        if (taskEdit) return
        applyEditingChanges(ev)
        if (taskEdit) return setTaskEdit(null)
        ev.stopPropagation()
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
    function applyEditingChanges(ev) {
        elTask = ev.target.parentNode.parentNode
        if (elTask.classList.contains('task-draggable-wrapper')) {
            const firstDirectDescendant = elTask.firstElementChild
            if (firstDirectDescendant) {
                elTask = firstDirectDescendant
            }
        }
        if (elTask.classList.contains('btn-task-show-details')) {
            const parent = elTask.parentNode
            if (parent) {
                elTask = parent
            }
        }
        utilService.applyStyles(elTask, taskPopStyle)
        const el = elTask.querySelector('.task-title')
        if (el) {
            el.style.display = 'none'
            const textarea = document.createElement('textarea')
            utilService.applyStyles(textarea, txtAreaStyle)
            textarea.classList.add('task-txt-area')
            textarea.value = taskTitle
            textarea.addEventListener('change', handleInputChange)
            elTask.appendChild(textarea)
        }
        setSelectedTaskId(elTask)
    }

    async function handleInputChange(event) {
        await setTaskTitle(event.target.value)
        task.title = event.target.value
        try {
            await updateTask(boardId, groupId, task)
        } catch (error) {
            console.log('cant update task')
        }
    }

    async function onSave(event) {
        task.title = taskTitle
        try {
            await updateTask(boardId, groupId, task)
        } catch (error) {
            console.log('cant update task')
        }
    }

    return (
        // <div ref={editRef}>
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
                {!taskEdit && (
                    <button
                        className="btn-task-show-details"
                        onClick={(ev) => {
                            toggleEditModal(ev, taskPreviewRef)
                        }}
                    >
                        <Stylus className="edit-icon" />
                    </button>
                )}

                {(task.style?.bgColor || task.style?.backgroundImage) && (
                    <div
                        className="task-header"
                        style={{
                            backgroundColor: task.style?.backgroundImage
                                ? ''
                                : task.style.bgColor,
                        }}
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
        // </div>
    )
}
