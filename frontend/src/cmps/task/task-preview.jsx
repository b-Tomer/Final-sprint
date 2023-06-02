import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import edit from '../../assets/img/icons/edit-task.png'
import { TaskEditor } from './task-editor'
import { useClickOutside } from '../../customHooks/useClickOutside'
import { TaskEditor } from './task-editor'

export function TaskPreview({ task, onRemoveTask, boardId, groupId }) {
    const navigate = useNavigate()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)

    useClickOutside(menuRef, onOpenMenu)

    function onOpenMenu() {
        setIsMenuOpen(!isMenuOpen)
        console.log(isMenuOpen)
    }
    function openTaskDetails() {
        navigate(`/task/${boardId}/${groupId}/${task.id}`)
    }

    return (
        <div className="task-container" onClick={openTaskDetails}>
            <span className="task-title">{task.title}</span>
            <button className="btn-task-show-details" onClick={onOpenMenu}>
                <img src={edit} alt="Edit" />
            </button>
            {isMenuOpen && (
                <TaskEditor taskId={task.id} onRemoveTask={onRemoveTask} />
            )}
        </div>
    )
}
