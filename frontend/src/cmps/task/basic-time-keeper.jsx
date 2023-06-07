import React, { useState } from 'react'

function BasicTimePicker({ hour, setHour, minute, setMinute }) {
    const handleHourChange = (event) => {
        setHour(parseInt(event.target.value))
        // setSelectedTime((prevState) => ({ ...prevState, hour }))
    }

    function handleMinuteChange(event) {
        setMinute(parseInt(event.target.value))
        // setSelectedTime((prevState) => ({ ...prevState, minute }))
    }

    function formatTime(hours, minutes) {
        const formattedHours = hours < 10 ? `0${hours}` : hours.toString()
        const formattedMinutes =
            minutes < 10 ? `0${minutes}` : minutes.toString()
        return `${formattedHours}:${formattedMinutes}`
    }

    return (
        <div className="time-picker-container">
            <div className="dials">
                <select
                    className="hours"
                    value={hour}
                    onChange={handleHourChange}
                >
                    <option value="">Hour</option>
                    {Array.from({ length: 24 }, (_, index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}
                </select>

                <select
                    className="minutes"
                    value={minute}
                    onChange={handleMinuteChange}
                >
                    <option value="">Minute</option>
                    {Array.from({ length: 60 }, (_, index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}
                </select>
            </div>

            <p>Selected time: {formatTime(hour, minute)}</p>
        </div>
    )
}

export default BasicTimePicker
