import { useSelector } from 'react-redux'
import { ReactComponent as Edit } from '../../assets/img/icons/edit.svg'
import React, { useState } from 'react'
import { updateTask } from '../../store/task.actions'
import { OPEN_DYN_MODAL, SET_MODAL_TITLE } from '../../store/system.reducer'
import { store } from '../../store/store'
import { DynamicCmp } from './dynamic-cmp'
import { SET_LABEL_TO_EDIT } from '../../store/board.reducer'
import { boardService } from 'services/board.service.local'
import { userService } from 'services/user.service'

export function DynCmpLabels({ task }) {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [isEditLabelOpen, setIsEditLabelOpen] = useState(false)
    const boardLabels = board.labels.map((label) => label.id)

    function handleEditButtonClick(title, label) {
        store.dispatch({ type: SET_LABEL_TO_EDIT, label })
        store.dispatch({ type: OPEN_DYN_MODAL })
        store.dispatch({ type: SET_MODAL_TITLE, title })
        setIsEditLabelOpen(true)
    }

    function findGroupIdByTaskId(board, taskId) {
        if (!Array.isArray(board.groups)) {
            return null
        }
        for (const group of board.groups) {
            if (!Array.isArray(group.tasks)) {
                continue
            }
            const foundTask = group.tasks.find((task) => task.id === taskId)
            if (foundTask) {
                return group.id
            }
        }
        return null
    }
    function onCheckClick(ev) {
        ev.stopPropagation()
    }

    function getLabelName(labelId) {
        const label = board.labels.find((currLabel) => currLabel.id === labelId)
        return label ? label.title : ''
    }

    function onToggleCheckedLabel(labelId) {
        if (!task) return

        const activity = boardService.getEmptyActivity()
        activity.memberId = userService.getLoggedinUser()?._id
            ? userService.getLoggedinUser()._id
            : null
        activity.taskId = task.id
        activity.by = userService.getLoggedinUser()?.fullname
            ? userService.getLoggedinUser().fullname
            : 'Guest'
        if (!task.labelIds) {
            task.labelIds = [labelId]
        } else {
            if (task.labelIds.includes(labelId)) {
                const labelIndex = task.labelIds.indexOf(labelId)
                task.labelIds.splice(labelIndex, 1)
                activity.title = `Removed label ${getLabelName(
                    labelId
                )} from task ${task.title}`
                activity.titleInTask = `Removed label ${getLabelName(labelId)}`
            } else {
                task.labelIds.push(labelId)
                activity.title = `Added label ${getLabelName(
                    labelId
                )} to task ${task.title}`
                activity.titleInTask = `Added label ${getLabelName(labelId)} `
            }
        }
        try {
            updateTask(
                board,
                findGroupIdByTaskId(board, task.id),
                task,
                activity
            )
        } catch (error) {
            console.log(error)
        }
    }
    if (!task.labelIds) task.labelIds = []
    return (
        <>
            {!isEditLabelOpen && (
                <div className="dyn-cmp-labels-container">
                    <h3 className="labels-title">Labels</h3>
                    <div className="labels-container">
                        {board.labels.map((label) => {
                            let isLabelChecked = task.labelIds
                                ? task.labelIds
                                : []
                            isLabelChecked = task.labelIds.includes(label.id)
                            return (
                                <label
                                    key={label.id}
                                    onClick={onCheckClick}
                                    className="dyn-cmp-label"
                                >
                                    <input
                                        id={`checkbox-${label.id}`}
                                        type="checkbox"
                                        name="checkbox"
                                        checked={isLabelChecked}
                                        onClick={onCheckClick}
                                        onChange={(ev) =>
                                            onToggleCheckedLabel(label.id)
                                        }
                                        className="checkbox"
                                    />
                                    <div
                                        className="label-title"
                                        style={{ backgroundColor: label.color }}
                                    >
                                        {label.title}
                                    </div>
                                    <button
                                        className="edit-label-btn"
                                        onClick={() =>
                                            handleEditButtonClick(
                                                'Edit label',
                                                label
                                            )
                                        }
                                    >
                                        <Edit className="edit-label-img" />
                                    </button>
                                </label>
                            )
                        })}
                    </div>
                </div>
            )}
            <div>
                {isEditLabelOpen && (
                    <DynamicCmp title={'Edit label'} task={task} />
                )}
            </div>
        </>
    )
}
