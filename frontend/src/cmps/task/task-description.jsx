import { useEffect, useRef, useState } from 'react'
import { ReactComponent as Description } from '../../assets/img/icons/description.svg'
import { useClickOutside } from '../../customHooks/useClickOutside'
import { updateTask } from '../../store/task.actions'


export function TaskDescription({ boardId, groupId, task }) {

    const [isEditing, setIsEditing] = useState(false)
    const [description, setDescription] = useState(task.description || '')
    const textRef = useRef(null)
    const menuRef = useRef(null)
    useClickOutside(menuRef, onClickOutside)

    useEffect(() => {
        if (textRef.current) {
            textRef.current.selectionStart = textRef.current.selectionEnd = textRef.current.value.length;
        }
    }, [])

    function onSaveDescription() {
        setIsEditing(false)
        const taskToUpdate = { ...task, description }
        console.log(taskToUpdate)
        updateTask(boardId, groupId, taskToUpdate)
    }

    function handleDescChange(ev) {
        const { value } = ev.target
        setDescription(value)
    }

    function onClickOutside(){
        if (textRef.current && textRef.current !== document.activeElement) {
            setIsEditing(false)
          }
    }

    function onCancelEditing() {
        setIsEditing(false)
        setDescription(task.description || '')
    }

    async function onOpenTextArea() {
        await setIsEditing(true)
        textRef.current.focus()
    }

    function adjustTextareaHeight() {
        const textarea = textRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }

    if (!task) return null
    return (
        <div className="description">

            <div className="description-title">
                <Description className="task-content-icon" />
                <h3>Description</h3>
                {!task.description || !isEditing && <button onClick={onOpenTextArea} className="edit-desc-btn">Edit</button>}
            </div>
            {(!task.description || isEditing) && <div className='description-container'>
                <textarea
                    ref={textRef}
                    placeholder="Add a more detailed description.."
                    value={description}
                    onChange={handleDescChange}
                    className="main-content-text-area"
                    onFocus={(e) => {
                        e.target.selectionStart = e.target.selectionEnd = e.target.value.length
                        adjustTextareaHeight()
                        setIsEditing(true)
                    }}
                ></textarea>
            </div>}
            {task.description && !isEditing && (
                <p onClick={onOpenTextArea} className="description-content">{task.description}</p>
            )}

            {isEditing && <div className="todo-btns edit-desc-btns">
                <button onClick={onSaveDescription} className="add-item-btn">
                    Save
                </button>
                <button onClick={onCancelEditing} className="cancel-edit-btn">
                    Cancel
                </button>
            </div>}

            <div ref={menuRef} className='desc-overlay'>
            </div>
        </div>
    )
}