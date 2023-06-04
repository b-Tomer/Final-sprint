import { TaskPreview } from './task/task-preview'
import dots from '../assets/img/icons/dots.svg'
import { ReactComponent as Plus } from '../assets/img/icons/plus.svg'
import { useEffect, useState } from 'react'
import { groupService } from '../services/group.service.local'
import { ReactComponent as X } from '../assets/img/icons/x.svg'
import { taskService } from '../services/task.service.local'
import { removeTask, saveTask } from '../store/task.actions'

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
    labelsFont
}) {
    const [groupToUpdate, setGroupToUpdate] = useState(group)
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)
    const [task, setTask] = useState(null)
    const [taskTitle, setTaskTitle] = useState('')

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
        setIsAddTaskOpen(!isAddTaskOpen)
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
            await saveTask(task, boardId, group.id)
        } catch (err) {
            console.log(err)
        } finally {
            setTask(taskService.getDefaultTask())
            setTaskTitle('')
            onAddClose()
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
            className="group-container"
            style={{
                display: 'grid',
                gridTemplateRows: isAddTaskOpen ? '47px 1fr' : '47px 1fr 43px',
            }}
        >
            <div className="group-header">
                <input
                    className="txt-input"
                    type="text"
                    value={groupToUpdate.title}
                    onChange={onChangegroupTitle}
                />
                <button>
                    <img onClick={()=>onRemoveGroup(group)} src={dots} alt="more" />
                </button>
            </div>
            <section className="group-content">
                {group.tasks.map((task) => (
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
                        setIsTaskDetailsOpen={setIsTaskDetailsOpen}
                        isTaskDetailsOpen={isTaskDetailsOpen}
                    />
                ))}
                {isAddTaskOpen && (
                    <div className="task-container">
                        <form onSubmit={onAddTask}>
                            <input
                                placeholder="Enter a title for this card..."
                                className="add-list-input"
                                value={taskTitle}
                                onChange={handleTaskTitle}
                            />
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
                    </div>
                )}
            </section>
            <div className="group-footer">
                {!isAddTaskOpen && (
                    <button onClick={onOpenAddTask}>
                        <Plus className="list-icon" /> Add a card
                    </button>
                )}
            </div>
        </section>
    )
}

// .list-icon
