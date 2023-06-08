import { useEffect, useRef, useState } from 'react'
import { ReactComponent as Open } from '../../assets/img/icons/window.svg'
import { ReactComponent as Labels } from '../../assets/img/icons/label.svg'
import { ReactComponent as Members } from '../../assets/img/icons/member.svg'
import { ReactComponent as Date } from '../../assets/img/icons/clock.svg'
import { ReactComponent as Move } from '../../assets/img/icons/arrow_right.svg'
import { ReactComponent as Archive } from '../../assets/img/icons/archive.svg'
import { ReactComponent as Cover } from '../../assets/img/icons/cover.svg'
import { removeTask } from '../../store/task.actions'
import { useNavigate } from 'react-router-dom'
import { utilService } from '../../services/util.service'
import {
    CLOSE_DYN_ALL_MODALS,
    OPEN_DYN_EDITOR_MODAL,
    OPEN_DYN_MODAL,
    SET_MODAL_TITLE,
} from '../../store/system.reducer'
import { store } from '../../store/store'
import { useSelector } from 'react-redux'
import { DynamicCmp } from '../dynamic-cmp/dynamic-cmp'

export function TaskEditor({
    pos,
    task,
    groupId,
    setTaskEdit,
    boardId,
    setIsTaskDetailsOpen,
    selectedTaskId,
    setSelectedTaskId,
}) {
    const taskPreviewRef = useRef()
    const container = useRef()
    const navigate = useNavigate()
    const windowPos = {}
    windowPos.x = window.innerWidth
    windowPos.y = window.innerHeight
    const [modalStyle, setModalStyle] = useState({})
    const [currTitle, setCurrTitle] = useState('')
    const { isOpenEditorModal } = useSelector(
        (storeState) => storeState.systemModule
    )
    const customStyles = {
        zIndex: 0,
    }

    useEffect(() => {
        calcModalStyle()
    }, [pos])

    useEffect(() => {
        function handleWindowResize() {
            windowPos.x = window.innerWidth
            windowPos.y = window.innerHeight
            calcModalStyle()
        }
        handleWindowResize()
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    function calcModalStyle() {
        if (container.current) {
            const elePos = {
                x: 430 + pos.left,
                y: 288 + pos.top,
            }
            const isOutOfBoundX = utilService.checkOutOfBoundX(
                windowPos,
                elePos
            )
            const isOutOfBoundY = utilService.checkOutOfBoundY(
                windowPos,
                elePos
            )
            let newModalStyle = isOutOfBoundX
                ? {
                      left: pos.left - 248 + 'px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                  }
                : {
                      left: 259 + pos.left + 'px',
                      justifyContent: 'start',
                  }
            if (isOutOfBoundY) {
                newModalStyle.top = pos.top - 210 + 'px'
            } else {
                newModalStyle.top = 8 + pos.top + 'px'
            }
            setModalStyle(newModalStyle)
        }
    }

    function onCloseEditor() {
        const el = selectedTaskId.querySelector('.task-title')
        if (el) {
            el.style.display = 'inline-block'
        }
        utilService.applyStyles(selectedTaskId, customStyles)
        const txtArea = selectedTaskId.querySelector('.task-txt-area')
        if (txtArea) {
            txtArea.remove()
        }
        setTaskEdit(false)
        store.dispatch({ type: SET_MODAL_TITLE, title: '' })
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
    }

    async function onRemoveTask(taskId) {
        removeTask(boardId, groupId, task.id)
    }

    function onOpenCard() {
        setIsTaskDetailsOpen(true)
        navigate(`/board/${boardId}/${groupId}/${task.id}`)
    }

    function onOpenEditorModal(title, ev) {
        ev.stopPropagation()
        setCurrTitle(title)
        store.dispatch({ type: SET_MODAL_TITLE, title })
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: OPEN_DYN_MODAL })
        store.dispatch({ type: OPEN_DYN_EDITOR_MODAL })
    }

    return (
        <section
            className="card-editor-background"
            ref={taskPreviewRef}
            onClick={onCloseEditor}
        >
            <section className="card-editor-container">
                <div
                    className="card-editor-buttons"
                    style={modalStyle}
                    ref={container}
                >
                    <button
                        onClick={onOpenCard}
                        className="quick-card-editor-buttons-item"
                    >
                        <Open className="card-editor-icon large" />
                        <span className="quick-card-editor-buttons-item-text">
                            Open card
                        </span>
                    </button>
                    <button
                        onClick={(ev) => onOpenEditorModal('Labels', ev)}
                        className="quick-card-editor-buttons-item js-edit-labels"
                    >
                        <Labels className="card-editor-icon" />
                        <span className="quick-card-editor-buttons-item-text">
                            Edit labels
                        </span>
                    </button>
                    <button
                        className="quick-card-editor-buttons-item js-edit-members"
                        onClick={(ev) => onOpenEditorModal('Members', ev)}
                    >
                        <Members className="card-editor-icon" />
                        <span className="quick-card-editor-buttons-item-text">
                            Change members
                        </span>
                    </button>
                    <button className="quick-card-editor-buttons-item js-edit-cover">
                        <Cover className="card-editor-icon" />
                        <span className="quick-card-editor-buttons-item-text">
                            Change cover
                        </span>
                    </button>
                    <button className="quick-card-editor-buttons-item js-move-card">
                        <Move className="card-editor-icon" />
                        <span className="quick-card-editor-buttons-item-text">
                            Move
                        </span>
                    </button>
                    <button className="quick-card-editor-buttons-item js-copy-card">
                        <Open className="card-editor-icon large" />
                        <span className="quick-card-editor-buttons-item-text">
                            Copy
                        </span>
                    </button>
                    <button
                        className="quick-card-editor-buttons-item js-edit-due-date"
                        onClick={(ev) => onOpenEditorModal('Dates', ev)}
                    >
                        <Date className="card-editor-icon" />
                        <span className="quick-card-editor-buttons-item-text">
                            Edit dates
                        </span>
                    </button>
                    <button
                        onClick={() => {
                            onRemoveTask(task.id)
                        }}
                        className="quick-card-editor-buttons-item js-archive"
                    >
                        <Archive className="card-editor-icon" />
                        <span className="quick-card-editor-buttons-item-text">
                            Archive
                        </span>
                    </button>
                    {isOpenEditorModal && (
                        <DynamicCmp task={task} title={currTitle} />
                    )}
                </div>
            </section>
        </section>
    )
}
