import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveTask } from '../../store/task.actions'
import { taskService } from '../../services/task.service.local'

import { utilService } from '../../services/util.service'
import { ReactComponent as Attachment } from '../../assets/img/icons/paperclip.svg'
import { ReactComponent as Due } from '../../assets/img/icons/clock.svg'
import { ReactComponent as DueCheck } from '../../assets/img/icons/CheckBox.svg'
import { ReactComponent as Checklists } from '../../assets/img/icons/checklist.svg'
import { ReactComponent as Description } from '../../assets/img/icons/description.svg'

export function TaskIcons({ task, groupId, boardId }) {
    // const { board } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    function onToggleIsDone(ev, task) {
        console.log(task)
        ev.preventDefault()
        task.isDone = !task.isDone
        dispatch(saveTask(task, boardId, groupId))
    }

    function getDateClass(task) {
        if (task?.isDone) {
            return 'completed'
        }

        const then = new Date(task?.dueDate)
        const now = new Date()
        const msBetweenDates = then.getTime() - now.getTime()
        const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000)

        if (hoursBetweenDates < 0) {
            return 'overdue'
        }
        if (hoursBetweenDates < 24) {
            return 'duesoon'
        }
    }

    function getTotalTodos(task) {
        const count = task.checklists.reduce((acc, checklist) => {
            return acc + checklist.todos.length
        }, 0)
        return count
    }

    function getDoneTodos(task) {
        const count = task.checklists.reduce((acc, checklist) => {
            const doneTodos = checklist.todos.filter((todo) => todo.isDone)
            return acc + doneTodos.length
        }, 0)
        return count
    }

    function areAllTodosDone(task) {
        if (task.checklists && getTotalTodos(task) === getDoneTodos(task)) {
            return 'completed'
        }
    }

    return (
        <section className="task-icons-container">
            {task.dueDate && (
                <div
                    onClick={(ev) => onToggleIsDone(ev, task)}
                    className={`task-icon task-due ${getDateClass(task)}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {isHovered && <DueCheck className="task-icon-img" />}
                    {!isHovered && <Due className="task-icon-img" />}
                    <span>{utilService.dueDateFormat(task.dueDate)}</span>
                </div>
            )}
            {task.description && (
                <div className="task-icon task-checklists">
                    <Description className="task-icon-img" />
                </div>
            )}
            {task.attachments && task.attachments.length && (
                <div className="task-icon task-attachments">
                    <Attachment className="task-icon-img" />
                    <span>{task.attachments.length}</span>
                </div>
            )}
            {task.checklists && task.checklists.length && (
                <div
                    className={`task-icon task-checklists ${areAllTodosDone(
                        task
                    )}`}
                >
                    <Checklists className="task-icon-img" />
                    <span>
                        {getDoneTodos(task)}/{getTotalTodos(task)}
                    </span>
                </div>
            )}
        </section>
    )
}
