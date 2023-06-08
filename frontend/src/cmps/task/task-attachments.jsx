import { useEffect, useState } from 'react'
import { ReactComponent as Attachments } from '../../assets/img/icons/attachment.svg'
import { updateTask } from '../../store/task.actions'
import { DynamicCmp } from '../dynamic-cmp/dynamic-cmp'
import { store } from '../../store/store'
import {
    CLOSE_DYN_ALL_MODALS,
    OPEN_DYN_EDIT_ATC,
    OPEN_DYN_MODAL,
    SET_MODAL_TITLE,
} from '../../store/system.reducer'
import { useSelector } from 'react-redux'
import { SET_ATC_TO_EDIT } from '../../store/board.reducer'

export function TaskAttachments({ task, boardId, groupId }) {
    const { isOpenEditAtc } = useSelector(
        (storeState) => storeState.systemModule
    )
    const [currTask, setCurrTask] = useState(task)
    const [currAtc, setCurrAtc] = useState(task)

    useEffect(() => {
        setCurrTask(task)
    }, [task])

    async function onDeleteAttachment(attachment) {
        const updatedStyle = { ...task.style }
        if (updatedStyle?.backgroundImage === attachment.url) {
            updatedStyle.backgroundImage = null
        }

        const updatedAttachments = task.attachments.filter(
            (att) => att.id !== attachment.id
        )

        const updatedTask = {
            ...task,
            style: updatedStyle,
            attachments: updatedAttachments,
        }

        setCurrTask(updatedTask)
        await updateTask(boardId, groupId, updatedTask)
    }

    function onToggleTaskCover(attachment) {
        const updatedStyle = { ...task.style }
        if (updatedStyle?.backgroundImage === attachment.url) {
            updatedStyle.backgroundImage = null
        } else {
            updatedStyle.backgroundImage = attachment.url
            updatedStyle.bgColor = null
        }
        const updatedTask = { ...task, style: updatedStyle }
        setCurrTask(updatedTask)
        console.log('task from cpm: ', updatedTask)
        updateTask(boardId, groupId, updatedTask)
    }

    function onEditAttachment(title, currAtc) {
        store.dispatch({ type: SET_ATC_TO_EDIT, atc:currAtc })
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: SET_MODAL_TITLE, title })
        store.dispatch({ type: OPEN_DYN_MODAL })
        store.dispatch({ type: OPEN_DYN_EDIT_ATC })
    }

    function formatTimestamp(timestamp) {
        const date = new Date(timestamp)
        const day = date.getDate()
        const month = date.getMonth() + 1 // Month starts from 0
        const year = date.getFullYear()

        const formattedDay = day < 10 ? `0${day}` : day.toString()
        const formattedMonth = month < 10 ? `0${month}` : month.toString()

        return `${formattedDay}/${formattedMonth}/${year}`
    }

    if (!task.attachments) return null

    return (
        <section className="attachments">
            <div className="description-title">
                <Attachments className="task-content-icon" />
                <h3>Attachments</h3>
            </div>
            {currTask.attachments.map((atc) => (
                <div key={atc.id} className="attachment-container">
                    <div className="attachment-image">
                        <img src={atc.url} />
                    </div>
                    <div className="attachment-content">
                        <span className="attachment-title">
                            {atc.title || atc.url?.split('/').pop().slice(0, 26)}
                        </span>
                        <span>Added at {formatTimestamp(atc.createdAt)} </span>
                        <span className="small-dots">&#x2022;</span>
                        <span className="attachment-btns">Comment</span>
                        <span className="small-dots">&#x2022;</span>
                        <span
                            onClick={() => onDeleteAttachment(atc)}
                            className="attachment-btns"
                        >
                            Delete
                        </span>
                        <span className="small-dots">&#x2022;</span>
                        <span
                            onClick={() =>
                                onEditAttachment('Edit attachment', atc)
                            }
                            className="attachment-btns"
                        >
                            Edit
                        </span>
                        <span className="attachment-btns">
                            <span
                                onClick={() => onToggleTaskCover(atc)}
                                className="toggle-attachment-cover"
                            >
                                {task.style?.backgroundImg === atc.url
                                    ? 'Remove cover'
                                    : 'Make cover'}
                            </span>
                        </span>
                    </div>
                </div>
            ))}
            {isOpenEditAtc && (
                <DynamicCmp task={task} title="Edit attachment" />
            )}
        </section>
    )
}
