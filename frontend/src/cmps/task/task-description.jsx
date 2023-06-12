import { useEffect, useRef, useState } from 'react'
import { ReactComponent as Description } from '../../assets/img/icons/description.svg'
import { useClickOutside } from '../../customHooks/useClickOutside'
import { updateTask } from '../../store/task.actions'
import { boardService } from 'services/board.service.local'
import { userService } from 'services/user.service'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffectUpdate } from 'customHooks/useEffectUpdate'


export function TaskDescription({ boardId, groupId, task }) {
    const { transcript, listening, resetTranscript } = useSpeechRecognition()
    const [isEditing, setIsEditing] = useState(false)
    const [description, setDescription] = useState(task.description || '')
    const textRef = useRef(null)
    const menuRef = useRef(null)
    useClickOutside(menuRef, onClickOutside)

    useEffect(() => {
        if (textRef.current) {
            textRef.current.selectionStart = textRef.current.selectionEnd =
                textRef.current.value.length
        }
    }, [])

    useEffectUpdate(() => {
        if (!listening) {
           setTimeout(()=> onStopRecording() , 1000)
           setTimeout(()=> onStopRecording() , 1500)
        }
    }, [listening])
    
    function onSaveDescription() {
        setIsEditing(false)
        const taskToUpdate = { ...task, description }
        const activity = boardService.getEmptyActivity()
        activity.memberId = userService.getLoggedinUser()?._id
            ? userService.getLoggedinUser()._id
            : null
        activity.title = `Changed description to: ${taskToUpdate.description}`
        activity.taskId = taskToUpdate.id
        activity.by = userService.getLoggedinUser()?.fullname
            ? userService.getLoggedinUser().fullname
            : 'Guest'
            console.log(taskToUpdate);
        updateTask(boardId, groupId, taskToUpdate, activity)
    }

    function handleDescChange(ev) {
        const { value } = ev.target
        setDescription(value)
    }

    function onClickOutside() {
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
        const textarea = textRef.current
        if (textarea) {
            textarea.style.height = 'auto'
            textarea.style.height = `${textarea.scrollHeight}px`
        }
    }

    function onStartRecording() {
        if (!listening) {
            SpeechRecognition.startListening()
            setIsEditing(true)
        } else {
            onStopRecording()
        }
    }

    function onStopRecording() {
        SpeechRecognition.stopListening()
        setDescription(transcript)
        onSaveDescription()
        resetTranscript()
        setIsEditing(false)       
    }



    console.log(transcript);

    if (!task) return null
    return (
        <div className="description">
            <div className="description-title">
                <Description className="task-content-icon" />
                <h3>Description</h3>
                <div className='record-btns'>
                    <button onClick={onStartRecording} className='start-listen-btn'><i className={`fa-solid fa-microphone-lines ${listening ? 'fa-beat-fade' : ''}`} style={{ color: "#b0b0b0" }}></i></button>
                    <button onClick={onStopRecording} className='stop-listen-btn'><i className="fa-regular fa-circle-stop" style={{ color: "#b0b0b0" }}></i></button>
                </div>
                {!task.description ||
                    (!isEditing && (
                        <button
                            onClick={onOpenTextArea}
                            className="edit-desc-btn"
                        >
                            Edit
                        </button>
                    ))}
            </div>
            {(!task.description || isEditing) && (
                <div className="description-container">
                    <textarea
                        ref={textRef}
                        placeholder="Add a more detailed description.."
                        value={description}
                        onChange={handleDescChange}
                        className="main-content-text-area"
                        onFocus={(e) => {
                            e.target.selectionStart = e.target.selectionEnd =
                                e.target.value.length
                            adjustTextareaHeight()
                            setIsEditing(true)
                        }}
                    ></textarea>
                </div>
            )}
            {task.description && !isEditing && (
                <p onClick={onOpenTextArea} className="description-content">
                    {task.description}
                </p>
            )}

            {isEditing && (
                <div className="todo-btns edit-desc-btns">
                    <button
                        onClick={onSaveDescription}
                        className="add-item-btn"
                    >
                        Save
                    </button>
                    <button
                        onClick={onCancelEditing}
                        className="cancel-edit-btn"
                    >
                        Cancel
                    </button>
                </div>
            )}

            <div ref={menuRef} className="desc-overlay"></div>
        </div>
    )
}

//  fa-beat-fade //////