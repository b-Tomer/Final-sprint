import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as Down } from '../../assets/img/icons/down.svg'

import { ResponsiveDatePickers } from '../date-picker'
import { updateTask } from '../../store/task.actions'

export function DatePreview({ task }) {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
    const [currTask, setCurrTask] = useState(task)
    const { boardId } = useParams()
    const { groupId } = useParams()

    if (!task || !task.dueDate) return

    const timestamp = task.dueDate
    const date = new Date(timestamp)
    const formattedDate = date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })

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
        return null
    }

    const handleToggleDatePicker = () => {
        setIsDatePickerOpen((prevIsOpen) => !prevIsOpen)
    }

    async function onCheckDate(ev) {
        const value = ev.target.checked
        setCurrTask((prevTodo) => ({
            ...prevTodo,
            isDone: value,
        }))
        task.isDone = value
        try {
            await updateTask(boardId, groupId, task)
        } catch (error) {
            console.log('cant update task')
        }
    }

    return (
        <div className="date-data">
            <h3 className="data-preview-title">Due date</h3>
            <div className="date-details">
                <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={onCheckDate}
                />
                <div className="full-date">
                    <span className="time">{formattedDate}</span>
                    {getDateClass(task) && (
                        <span className={`badge  ${getDateClass(task)}`}>
                            {getDateClass(task)}
                        </span>
                    )}
                    <Down className="down-img" src={Down} alt="" />
                    {/* {isDatePickerOpen && <ResponsiveDatePickers className='date-picker' />} */}
                </div>
            </div>
        </div>
    )
}
