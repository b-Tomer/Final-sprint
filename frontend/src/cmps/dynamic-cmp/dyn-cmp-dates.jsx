import * as React from 'react'
import { useState, useRef } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { utilService } from '../../services/util.service'
import { useParams } from 'react-router-dom'
import { updateTask } from '../../store/task.actions'
import { CLOSE_DYN_ALL_MODALS } from '../../store/system.reducer'
import { store } from '../../store/store'
import BasicTimePicker from '../task/basic-time-keeper'

export function DynCmpDates({ task }) {
    const [selectedDate, setSelectedDate] = useState(null)
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)

    const { boardId } = useParams()
    const { groupId } = useParams()

    function handleDateChange(value) {
        setSelectedDate(value)
    }

    async function saveDate(ev) {
        ev.stopPropagation()
        if (!selectedDate) return
        const year = selectedDate.$y
        const month = selectedDate.$M
        const day = selectedDate.$D
        const timestamp = utilService.getTimestamp(
            year,
            month,
            day,
            hour,
            minute
            )
            task.dueDate = timestamp
            try {
                await updateTask(boardId, groupId, task)
            store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        } catch (error) {
            console.log('cant update task')
        }
    }
    
    async function removeDate(ev) {
        ev.stopPropagation()
        if (!task?.dueDate) return
        task.dueDate = null
        try {
            await updateTask(boardId, groupId, task)
            store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        } catch (error) {
            console.log('cant update task')
        }
    }
    
    function stopPropagation(ev){
        ev.stopPropagation()
    }
    
    return (
        <div className="time-picker-container" onClick={stopPropagation}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                    value={selectedDate}
                    onChange={(newValue) => {
                        handleDateChange(newValue)
                    }}
                />
                <BasicTimePicker
                    hour={hour}
                    setHour={setHour}
                    minute={minute}
                    setMinute={setMinute}
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
