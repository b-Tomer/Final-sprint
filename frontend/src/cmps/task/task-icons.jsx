import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveTask, updateTask } from '../../store/task.actions'

import { utilService } from '../../services/util.service'
import { ReactComponent as Attachment } from '../../assets/img/icons/paperclip.svg'
import { ReactComponent as Due } from '../../assets/img/icons/clock.svg'
import { ReactComponent as DueCheck } from '../../assets/img/icons/CheckBox.svg'
import { ReactComponent as Checklists } from '../../assets/img/icons/checklist.svg'
import { ReactComponent as Description } from '../../assets/img/icons/description.svg'

export function TaskIcons({ task, groupId, boardId }) {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [currTask, setCurrTask] = useState(task)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        setCurrTask(task)
    }, [task])

    function onToggleIsDone(ev, task) {
        ev.stopPropagation()
        task.isDone = !task.isDone
        updateTask(boardId, groupId, task)
    }

    function onOpenMemberPreview(ev, memberId) {
        ev.stopPropagation()
        console.log(memberId)
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
    }

    function getTotalTodos(task) {
        const count = task.checklists.reduce((acc, checklist) => {
            return acc + checklist.todos.length
        }, 0)
        return count
    }

    function getDoneTodos(task) {
        const count = task.checklists.reduce((acc, checklist) => {
            const doneTodos = checklist.todos.filter((todo) => todo.isDone)
            return acc + doneTodos.length
        }, 0)
        return count
    }

    function areAllTodosDone(task) {
        if (task.checklists && getTotalTodos(task) === getDoneTodos(task)) {
            return 'completed'
        }
    }

    function getMemberImg(memberId) {
        if (!board.members) return
        const currMember = board?.members.find(
            (member) => member._id === memberId
        )
        if (currMember.imgUrl) {
            return currMember.imgUrl
        } else {
            return 'https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg'
        }
    }

    return (
        <section className="task-icons-container">
            <div className="task-icons-all">
                {currTask.dueDate && (
                    <div
                        onClick={(ev) => onToggleIsDone(ev, task)}
                        className={`task-icon task-due ${getDateClass(task)}`}
                    >
                        {isHovered && <DueCheck className="task-icon-img" />}
                        {!isHovered && <Due className="task-icon-img" />}
                        <span>{utilService.dueDateFormat(task.dueDate)}</span>
                    </div>
                )}
                {task.description && (
                    <div className="task-icon task-checklists">
                        <Description className="task-icon-img" />
                    </div>
                )}
                {task.attachments && task.attachments.length > 0 && (
                    <div className="task-icon task-attachments">
                        <Attachment className="task-icon-img" />
                        <span>{task.attachments.length}</span>
                    </div>
                )}
                {task.checklists && task.checklists.length > 0 && (
                    <div
                        className={`task-icon task-checklists ${areAllTodosDone(
                            task
                        )}`}
                    >
                        <Checklists className="task-icon-img" />
                        <span>
                            {getDoneTodos(task)}/{getTotalTodos(task)}
                        </span>
                    </div>
                )}
            </div>
            {task.members && task.members.length > 0 && (
                <div className="task-icons-members">
                    {task.members.map((memberId) => (
                        <button
                            onClick={(ev) => onOpenMemberPreview(ev, memberId)}
                            key={memberId}
                            // style={{
                            //     backgroundColor: getLabelBgColor(label),
                            // }}
                            className="task-members-btn"
                        >
                            <img src={getMemberImg(memberId)} alt="" />
                        </button>
                    ))}
                </div>
            )}
        </section>
    )
}
