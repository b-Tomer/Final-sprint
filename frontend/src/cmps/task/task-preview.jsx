import { useRef, useState } from 'react'
import edit from '../../assets/img/icons/edit-task.png'
import { TaskEditor } from '../task-editor'
import { useClickOutside } from '../../customHooks/useClickOutside'

export function TaskPreview({ task, onRemoveTask }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)

    useClickOutside(menuRef, onOpenMenu)

    function onOpenMenu() {
        setIsMenuOpen(!isMenuOpen)
        console.log(isMenuOpen);
    }

    return (
        <div className="task-container">
            <span className="task-title">{task.title}</span>
            <button className="btn-task-show-details" onClick={onOpenMenu}>
                <img src={edit} alt="Edit" />
            </button>
            {isMenuOpen && <TaskEditor taskId={task.id} onRemoveTask={onRemoveTask} />}
        </div>
    )
}
