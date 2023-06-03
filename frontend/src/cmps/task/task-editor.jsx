import { useEffect, useRef, useState } from 'react'
import { useClickOutside } from '../../customHooks/useClickOutside'
import { ReactComponent as Open } from '../../assets/img/icons/window.svg'
import { ReactComponent as Labels } from '../../assets/img/icons/label.svg'
import { ReactComponent as Members } from '../../assets/img/icons/member.svg'
import { ReactComponent as Date } from '../../assets/img/icons/clock.svg'
import { ReactComponent as Move } from '../../assets/img/icons/arrow_right.svg'
import { ReactComponent as Archive } from '../../assets/img/icons/archive.svg'
import { ReactComponent as Cover } from '../../assets/img/icons/cover.svg'
import { removeTask } from '../../store/task.actions'

export function TaskEditor({ pos, task, groupId, setTaskEdit, boardId }) {
    const menuRef = useRef(null)
    const taskPreviewRef = useRef()

    useClickOutside(menuRef, toggleEditModal)
    useEffect(() => {
        console.log(pos)
        console.log(task)
        console.log(groupId)
    }, [])

    function toggleEditModal() {
        setTaskEdit(false)
    }

    async function onRemoveTask(taskId) {
        console.log(boardId + ' ' + groupId + ' ' + task.id)
        removeTask(boardId, groupId, task.id)
    }

    const modalStyle = { top: 8 + pos.top + 'px', left: 259 + pos.left + 'px' }

    return (
        <section
            className="card-editor-background"
            ref={taskPreviewRef}
            onClick={(ev) => {
                toggleEditModal(ev, taskPreviewRef)
            }}
        >
            <section className="card-editor-container" style={modalStyle}>
                <div className="card-editor-buttons">
                    <a
                        className="quick-card-editor-buttons-item"
                        href="/c/SVVJv135/2-filter-toys-by-in-stock"
                        data-testid="card-quick-edit-menu-open-card"
                    >
                        <Open className="card-editor-icon large" />
                        <span className="quick-card-editor-buttons-item-text">
                            Open card
                        </span>
                    </a>
                    <a
                        className="quick-card-editor-buttons-item js-edit-labels"
                        href="#"
                        data-testid="card-quick-edit-menu-edit-labels"
                    >
                        <Labels className="card-editor-icon" />
                        <span className="quick-card-editor-buttons-item-text">
                            Edit labels
                        </span>
                    </a>
                    <a
                        className="quick-card-editor-buttons-item js-edit-members"
                        href="#"
                        data-testid="card-quick-edit-menu-change-members"
                    >
                        <Members className="card-editor-icon" />
                        <span className="quick-card-editor-buttons-item-text">
                            Change members
                        </span>
                    </a>
                    <a
                        className="quick-card-editor-buttons-item js-edit-cover"
                        href="#"
                        data-testid="card-quick-edit-menu-change-cover"
                    >
                        <Cover className="card-editor-icon" />
                        <span className="quick-card-editor-buttons-item-text">
                            Change cover
                        </span>
                    </a>
                    <a
                        className="quick-card-editor-buttons-item js-move-card"
                        href="#"
                        data-testid="card-quick-edit-menu-move"
                    >
                        <Move className="card-editor-icon" />
                        <span className="quick-card-editor-buttons-item-text">
                            Move
                        </span>
                    </a>
                    <a
                        className="quick-card-editor-buttons-item js-copy-card"
                        href="#"
                        data-testid="card-quick-edit-menu-copy"
                    >
                        <Open className="card-editor-icon large" />
                        <span className="quick-card-editor-buttons-item-text">
                            Copy
                        </span>
                    </a>
                    <a
                        className="quick-card-editor-buttons-item js-edit-due-date"
                        href="#"
                        data-testid="card-quick-edit-menu-edit-dates"
                    >
                        <Date className="card-editor-icon" />
                        <span className="quick-card-editor-buttons-item-text">
                            Edit dates
                        </span>
                    </a>
                    <a
                        onClick={() => {
                            onRemoveTask(task.id)
                        }}
                        className="quick-card-editor-buttons-item js-archive"
                        href="#"
                        data-testid="card-quick-edit-menu-archive"
                    >
                        <Archive className="card-editor-icon" />
                        <span className="quick-card-editor-buttons-item-text">
                            Archive
                        </span>
                    </a>
                </div>
            </section>
        </section>
    )
}
