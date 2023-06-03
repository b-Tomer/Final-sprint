import { useEffect, useRef, useState } from 'react'
import { useClickOutside } from '../../customHooks/useClickOutside'

export function TaskEditor({
    onRemoveTask,
    taskId,
    pos,
    task,
    groupId,
    setTaskEdit,
}) {
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
                        <span className="icon-sm icon-card light"></span>
                        <span className="quick-card-editor-buttons-item-text">
                            Open card
                        </span>
                    </a>
                    <a
                        className="quick-card-editor-buttons-item js-edit-labels"
                        href="#"
                        data-testid="card-quick-edit-menu-edit-labels"
                    >
                        <span className="icon-sm icon-label light"></span>
                        <span className="quick-card-editor-buttons-item-text">
                            Edit labels
                        </span>
                    </a>
                    <a
                        className="quick-card-editor-buttons-item js-edit-members"
                        href="#"
                        data-testid="card-quick-edit-menu-change-members"
                    >
                        <span className="icon-sm icon-member light"></span>
                        <span className="quick-card-editor-buttons-item-text">
                            Change members
                        </span>
                    </a>
                    <a
                        className="quick-card-editor-buttons-item js-edit-cover"
                        href="#"
                        data-testid="card-quick-edit-menu-change-cover"
                    >
                        <span className="icon-sm icon-card-cover light"></span>
                        <span className="quick-card-editor-buttons-item-text">
                            Change cover
                        </span>
                    </a>
                    <a
                        className="quick-card-editor-buttons-item js-move-card"
                        href="#"
                        data-testid="card-quick-edit-menu-move"
                    >
                        <span className="icon-sm icon-move light"></span>
                        <span className="quick-card-editor-buttons-item-text">
                            Move
                        </span>
                    </a>
                    <a
                        className="quick-card-editor-buttons-item js-copy-card"
                        href="#"
                        data-testid="card-quick-edit-menu-copy"
                    >
                        <span className="icon-sm icon-card light"></span>
                        <span className="quick-card-editor-buttons-item-text">
                            Copy
                        </span>
                    </a>
                    <a
                        className="quick-card-editor-buttons-item js-edit-due-date"
                        href="#"
                        data-testid="card-quick-edit-menu-edit-dates"
                    >
                        <span className="icon-sm icon-clock light"></span>
                        <span className="quick-card-editor-buttons-item-text">
                            Edit dates
                        </span>
                    </a>
                    <a
                        onClick={() => {
                            onRemoveTask(taskId)
                        }}
                        className="quick-card-editor-buttons-item js-archive"
                        href="#"
                        data-testid="card-quick-edit-menu-archive"
                    >
                        <span className="icon-sm icon-archive light"></span>
                        <span className="quick-card-editor-buttons-item-text">
                            Archive
                        </span>
                    </a>
                </div>
            </section>
        </section>
    )
}
