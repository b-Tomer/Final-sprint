import * as React from 'react'
import { useState, useRef } from 'react'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { utilService } from '../../services/util.service'
import { useParams } from 'react-router-dom'
import { updateTask } from '../../store/task.actions'
import { CLOSE_DYN_ALL_MODALS } from '../../store/system.reducer'
import { store } from '../../store/store'

export function DynCmpDates({ task }) {
    const [selectedDate, setSelectedDate] = useState(null)
    const { boardId } = useParams()
    const { groupId } = useParams()
    const dateRef = useRef(null)

    function handleDateChange(value) {
        setSelectedDate(value)
    }

    async function saveDate() {
        if (!selectedDate) return
        const year = selectedDate.$y
        const month = selectedDate.$M
        const day = selectedDate.$D
        const timestamp = utilService.getTimestamp(year, month, day)
        if (!task?.dueDate) {
            task.dueDate = timestamp
        } else {
            task.dueDate =
                utilService.getTimeInMilliseconds(task.dueDate) + timestamp
        }
        try {
            await updateTask(boardId, groupId, task)
            store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        } catch (error) {
            console.log('cant update task')
        }
    }

    async function removeDate() {
        if (!task?.dueDate) return
        task.dueDate = null
        try {
            await updateTask(boardId, groupId, task)
            store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        } catch (error) {
            console.log('cant update task')
        }
    }

    return (
        <div className="time-picker-container">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                    ref={dateRef}
                    value={selectedDate}
                    onChange={(newValue) => {
                        handleDateChange(newValue)
                    }}
                />
            </LocalizationProvider>
            <div className="control-btns">
                <button className="save" onClick={saveDate}>
                    Save
                </button>
                <button className="remove" onClick={removeDate}>
                    Remove
                </button>
            </div>
        </div>
    )
}
