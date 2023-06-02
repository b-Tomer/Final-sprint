import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Stylus } from '../../assets/img/icons/stylus.svg'
import { TaskEditor } from './task-editor'
import { useClickOutside } from '../../customHooks/useClickOutside'

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
        <div className="task-container">
            <button className="btn-task-show-details" onClick={onOpenMenu}>
                <Stylus className="edit-icon" />
            </button>
            {isMenuOpen && (
                <TaskEditor taskId={task.id} onRemoveTask={onRemoveTask} />
            )}
            {(task.style?.bgColor || task.style?.backgroundImage) && (
                <div
                    className="task-header"
                    style={
                        !task.style?.backgroundImage
                            ? {
                                  backgroundColor: task.style.bgColor,
                              }
                            : { backgroundColor: '' }
                    }
                >
                    <img
                        className="task-header-cover-img"
                        src={task.style.backgroundImage}
                        alt=""
                    />
                </div>
            )}
            <div className="task-content">
                <span className="task-title" onClick={openTaskDetails}>
                    {task.title}
                </span>
                <section className="task-icons">
                    <div className="task-attachments"></div>
                </section>
            </div>
        </div>
    )
}
