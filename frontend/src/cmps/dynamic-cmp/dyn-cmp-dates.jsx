import * as React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { utilService } from '../../services/util.service'
import { useParams } from 'react-router-dom'
import { updateTask } from '../../store/task.actions'

export function DynCmpDates({ task }) {
    const [selectedDate, setSelectedDate] = useState(null)
    const [currTask, setCurrTask] = useState(task)
    const { boardId } = useParams()
    const { groupId } = useParams()

    function handleDateChange(value) {
        // console.log(value)
        setSelectedDate(value)
        // console.log(task)
        // console.log(task.dueDate)
        // console.log(utilService.getTimeValues(task.dueDate))
    }

    function saveDate() {}

    async function removeDate() {
        console.log(task)
        if (!task?.dueDate) return
        console.log(task)
        task.dueDate = null
        console.log(task)

        // try {
        //     await updateTask(boardId, groupId, task)
        // } catch (error) {
        //     console.log('cant update task')
        // }
    }

    return (
        <div className="time-picker-container">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
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
