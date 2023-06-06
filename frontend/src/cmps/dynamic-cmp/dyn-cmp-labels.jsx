// import Pencil from '../../assets/img/edit-task.png';
import { useSelector } from 'react-redux'
import { ReactComponent as Edit } from '../../assets/img/icons/edit.svg'
import React, { useState } from 'react';
import { updateTask } from '../../store/task.actions';
import { DynCmpEditLabel } from './dyn-cmp-edit-label';

export function DynCmpLabels({ task }) {
    const { board } = useSelector((storeState) => storeState.boardModule)

    function findGroupIdByTaskId(board, taskId) {
        if (!Array.isArray(board.groups)) {
            return null
        }
        for (const group of board.groups) {
            if (!Array.isArray(group.tasks)) {
                continue
            }
            const foundTask = group.tasks.find(task => task.id === taskId)
            if (foundTask) {
                return group.id
            }
        }
        return null
    }

    function onToggleCheckedLabel(ev, labelId) {
        const checked = ev.target.checked;

        console.log(task.labelIds)
        if (!task.labelIds) {
            task.labelIds = [labelId]
        }
        else {
            if (task.labelIds.includes(labelId)) {
                const labelIndex = task.labelIds.indexOf(labelId);
                task.labelIds.splice(labelIndex, 1);
            } else task.labelIds.push(labelId)
        }
        updateTask(board._id, findGroupIdByTaskId(board, task.id), task)
    }

    return (
        <div className='dyn-cmp-labels-container'>
            {/* <h3>Board members</h3>
            <div className="labels-container" >
                {board.labels.map(label => {
                    let isLabelChecked = task.labelIds ? task.labelIds.includes(label.id) : false;
                    return (
                        <label key={label.id} className="dyn-cmp-label">
                            <input
                                id={`checkbox-${label.id}`}
                                type="checkbox"
                                name="checkbox"
                                checked={isLabelChecked}
                                onChange={(ev) => onToggleCheckedLabel(ev, label.id)}
                                className="checkbox" />
                            <div className="label-title" style={{ backgroundColor: label.color }}>{label.title}</div>
                            <button className='edit-label-btn'>
                                <Edit className="edit-label-img" />
                            </button>
                        </label>
                    )
                })}
            </div> */}
            <DynCmpEditLabel />
        </div>
    )
}


