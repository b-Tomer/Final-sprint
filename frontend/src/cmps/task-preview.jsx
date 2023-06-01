import { useState } from 'react'
import edit from '../assets/img/icons/edit-task.png'
import { TaskEditor } from './task-editor'

export function TaskPreview({ task }) {
    function handleClick() {
        console.log('click')
    }

    return (
        <div className="task-container">
            <span className="task-title">{task.title}</span>
            <button className="btn-task-show-details" onClick={handleClick}>
                <img src={edit} alt="Edit" />
            </button>
            <TaskEditor />
        </div>
    )
}
