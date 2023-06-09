import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as Down } from '../../assets/img/icons/down.svg'
import {
    CLOSE_DYN_ALL_MODALS,
    CLOSE_DYN_MODAL,
    OPEN_DYN_DATE_MODAL,
    OPEN_DYN_MODAL,
    SET_MODAL_TITLE,
} from '../../store/system.reducer'
import { useSelector } from 'react-redux'
import { store } from '../../store/store'
import { updateTask } from '../../store/task.actions'
import { DynamicCmp } from '../dynamic-cmp/dynamic-cmp'
import { boardService } from 'services/board.service.local'
import { userService } from 'services/user.service'

export function DatePreview({ task, setDynamicCmpName }) {
    const [currTask, setCurrTask] = useState(task)
    const [localModalOpen, setLocalModalOpen] = useState(false)

    const { boardId } = useParams()
    const { groupId } = useParams()
    const [modalPos, setModalPos] = useState(null)

    // const { isModalOpen } = useSelector((storeState) => storeState.systemModule)
    const { isOpenDateModal } = useSelector(
        (storeState) => storeState.systemModule
    )

    if (!task || !task.dueDate) return

    const timestamp = task.dueDate
    const date = new Date(timestamp)
    const formattedDate = date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })

    function onCloseDynModal() {
        store.dispatch({ type: CLOSE_DYN_MODAL })
        setDynamicCmpName('')
        setLocalModalOpen(false)
    }

    function onOpenDynModal() {
        store.dispatch({ type: OPEN_DYN_MODAL })
        setDynamicCmpName('Dates')
        setLocalModalOpen(true)
    }

    function getDateClass(task) {
        if (task?.isDone) {
            return 'completed'
        }

        const then = new Date(task?.dueDate)
        const now = new Date()
        const msBetweenDates = then.getTime() - now.getTime()
        const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000)

        if (hoursBetweenDates < 0) {
            return 'overdue'
        }
        if (hoursBetweenDates < 24) {
            return 'duesoon'
        }
        return null
    }

    function handleToggleDatePicker(ev) {
        let { top, left, height } = ev.target.getBoundingClientRect()
        setModalPos({ top, left, height })
        store.dispatch({ type: SET_MODAL_TITLE, title: 'Dates' })
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: OPEN_DYN_MODAL })
        store.dispatch({ type: OPEN_DYN_DATE_MODAL })
    }

    async function onCheckDate(ev) {
        const value = ev.target.checked
        setCurrTask((prevTodo) => ({
            ...prevTodo,
            isDone: value,
        }))
        task.isDone = value
        try {
            const activity = boardService.getEmptyActivity()
            activity.title = `Changed title to: ${task.title}`
            activity.taskId = task.id
            activity.title = `Marked task ${task.title} as: ${getIsDone(
                task.isDone
            )}`
            activity.by = userService.getLoggedinUser()?.fullname
                ? userService.getLoggedinUser().fullname
                : 'Guest'
            await updateTask(boardId, groupId, task, activity)
        } catch (error) {
            console.log('cant update task')
        }
    }

    function getIsDone(flag) {
        if (flag) {
            return 'Done'
        } else return 'Ongoing'
    }

    return (
        <div className="date-data">
            <h3 className="data-preview-title">Due date</h3>
            <div className="date-details">
                <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={onCheckDate}
                />
                <div className="full-date" onClick={handleToggleDatePicker}>
                    <span className="time">{formattedDate}</span>
                    {getDateClass(task) && (
                        <span className={`badge  ${getDateClass(task)}`}>
                            {getDateClass(task)}
                        </span>
                    )}
                    <Down className="down-img" src={Down} alt="" />
                    {/* {isDatePickerOpen && <ResponsiveDatePickers className='date-picker' />} */}
                </div>
            </div>
            {isOpenDateModal && (
                <DynamicCmp
                    task={task}
                    modalPos={modalPos}
                    title="Edit attachment"
                />
            )}
        </div>
    )
}
