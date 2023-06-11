import React, { useState } from 'react'

function BasicTimePicker({ hour, setHour, minute, setMinute }) {
    const handleHourChange = (event) => {
        setHour(parseInt(event.target.value))
    }

    const handleMinuteChange = (event) => {
        setMinute(parseInt(event.target.value))
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
                <label>
                    <input
                        className="hours"
                        type="number"
                        min="0"
                        max="23"
                        value={hour}
                        onChange={handleHourChange}
                    />
                </label>
                <span>:</span>
                <label>
                    <input
                        className="minutes"
                        type="number"
                        min="0"
                        max="59"
                        value={minute}
                        onChange={handleMinuteChange}
                    />
                </label>
            </div>

            <p>Selected time: {formatTime(hour, minute)}</p>
        </div>
    )
}

export default BasicTimePicker
