import { TaskPreview } from './task/task-preview'
import dots from '../assets/img/icons/dots.svg'
import { ReactComponent as Plus } from '../assets/img/icons/plus.svg'
import { useEffect, useState, useRef } from 'react'
import { groupService } from '../services/group.service.local'
import { ReactComponent as X } from '../assets/img/icons/x.svg'
import { taskService } from '../services/task.service'
import { removeTask, saveTask } from '../store/task.actions'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { boardService } from 'services/board.service.local'
import { userService } from 'services/user.service'

export function GroupDetails({
    group,
    onRemoveGroup,
    boardId,
    setIsTaskDetailsOpen,
    isTaskDetailsOpen,
    setTaskEdit,
    taskEdit,
    onExpandLabels,
    isLabelsExpand,
    labelsFont,
    provided,
    isDragging,
    selectedTaskId,
    setSelectedTaskId,
}) {
    const [groupToUpdate, setGroupToUpdate] = useState(group)
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)
    const [task, setTask] = useState(null)
    const [taskTitle, setTaskTitle] = useState('')
    const inputRef = useRef()
    const groupRef = useRef(null)

    useEffect(() => {
        setTask(taskService.getDefaultTask())
    }, [])

    function onChangegroupTitle(ev) {
        const val = ev.target.value
        setGroupToUpdate((prevGroup) => ({
            ...prevGroup,
            title: val,
        }))
        groupService.saveGroup(val, boardId, group.id)
    }

    function onOpenAddTask() {
        setIsAddTaskOpen(true)
        setTimeout(()=>{

            groupRef.current.scrollTo({
                left: 0,
                top: 9000000,
                behavior: 'smooth',
            })
            },200)
    }

    function handleTaskTitle(ev) {
        const { value } = ev.target
        setTaskTitle(value)
        setTask((prevTask) => ({
            ...prevTask,
            title: value,
        }))
    }

    async function onAddTask(ev) {
        ev.preventDefault()
        try {
            const activity = boardService.getEmptyActivity()
            activity.taskId = task.id
            task.isDone = !task.isDone
            activity.memberId = userService.getLoggedinUser()?._id
                ? userService.getLoggedinUser()._id
                : null
            activity.by = userService.getLoggedinUser()?.fullname
                ? userService.getLoggedinUser().fullname
                : 'Guest'
            activity.title = `Added task: "${task.title}" to group: "${group.title}"`
            activity.titleInTask = `Added this task to group "${group.title}"`
            await saveTask(task, boardId, group.id, activity)
        } catch (err) {
            console.log(err)
        } finally {
            setTask(taskService.getDefaultTask())
            setTaskTitle('')
            onAddClose()
            onOpenAddTask()
            groupRef.current.scrollTo({
                left: 0,
                top: 90000,
                behavior: 'smooth',
            })
        }
    }

    async function onRemoveTask(taskId) {
        removeTask(boardId, group.id, taskId)
    }

    function onAddClose() {
        setIsAddTaskOpen(false)
    }

    return (
        <section
            className={`group-container ${isDragging ? 'dragging' : ''}`}
            style={{
                display: 'grid',
                gridTemplateRows: isAddTaskOpen ? '47px 1fr' : '47px 1fr 43px',
            }}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
        >
            <div className="group-header">
                <input
                    className="txt-input"
                    type="text"
                    value={groupToUpdate.title}
                    onChange={onChangegroupTitle}
                />
                <button>
                    <img
                        onClick={() => onRemoveGroup(group)}
                        src={dots}
                        alt="more"
                    />
                </button>
            </div>
            <Droppable droppableId={group.id} type="task">
                {(provided) => (
                    <section
                        className={`group-content `}
                        {...provided.droppableProps}
                        ref={(el) => {
                            provided.innerRef(el)
                            groupRef.current = el
                        }}
                    >
                        {group.tasks.map((task, index) => (
                            <Draggable
                                draggableId={task.id}
                                key={task.id}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <TaskPreview
                                        labelsFont={labelsFont}
                                        isLabelsExpand={isLabelsExpand}
                                        onExpandLabels={onExpandLabels}
                                        onRemoveTask={onRemoveTask}
                                        task={task}
                                        key={task.id}
                                        boardId={boardId}
                                        groupId={group.id}
                                        setTaskEdit={setTaskEdit}
                                        taskEdit={taskEdit}
                                        setIsTaskDetailsOpen={
                                            setIsTaskDetailsOpen
                                        }
                                        isTaskDetailsOpen={isTaskDetailsOpen}
                                        provided={provided}
                                        isDragging={snapshot.isDragging}
                                        selectedTaskId={selectedTaskId}
                                        setSelectedTaskId={setSelectedTaskId}
                                    />
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        {isAddTaskOpen && (
                            <form onSubmit={onAddTask}>
                                <div className="task-container">
                                    <input
                                        ref={inputRef}
                                        placeholder="Enter a title for this card..."
                                        className="add-list-input add-list-box"
                                        value={taskTitle}
                                        onChange={handleTaskTitle}
                                    />
                                </div>
                                    <div className="add-btns">
                                        <button
                                            onClick={onAddTask}
                                            className="add-item-btn"
                                        >
                                            Add card
                                        </button>
                                        <button
                                            onClick={onAddClose}
                                            className="svg-holder"
                                        >
                                            <X className="list-icon icon-big" />
                                        </button>
                                    </div>
                            </form>
                        )}
                    </section>
                )}
            </Droppable>
            <div className="group-footer">
                {!isAddTaskOpen && (
                    <button ref={inputRef} onClick={onOpenAddTask}>
                        <Plus className="list-icon" /> Add a card
                    </button>
                )}
            </div>
        </section>
    )
}
