import * as React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { utilService } from '../../services/util.service'

export function DynCmpDates({ task }) {
    const [selectedDate, setSelectedDate] = useState(null)
    const [currTask, setCurrTask] = useState(task)

    function handleDateChange(value) {
        // console.log(value)
        setSelectedDate(value)
        // console.log(task)
        // console.log(task.dueDate)
        console.log(utilService.getTimeValues(task.dueDate))
    }
    console.log(selectedDate)

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
        </div>
    )
}
