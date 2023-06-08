import { ReactComponent as X } from '../../assets/img/icons/x.svg'
import { useEffect, useRef, useState } from 'react'
import { DynCmpMembers } from './dyn-cmp-members'
import { DynCmpLabels } from './dyn-cmp-labels'
import { DynCmpChecklist } from './dyn-cmp-checklist'
import { DynCmpDates } from './dyn-cmp-dates'
import { DynCmpAttachment } from './dyn-cmp-attachment'
import { DynCmpAttachmentEdit } from './dyn-cpm-attachment-edit'
import { CLOSE_DYN_ALL_MODALS, SET_MODAL_TITLE } from '../../store/system.reducer'
import { useSelector } from 'react-redux'
import { store } from '../../store/store'
import { useParams } from 'react-router-dom'
import { DynCmpEditLabel } from './dyn-cmp-edit-label'


export function DynamicCmp({ task, title, setEditing, modalPos }) {
    const { isModalOpen } = useSelector((storeState) => storeState.systemModule)
    const { modalTitle } = useSelector((storeState) => storeState.systemModule)
    const { boardId } = useParams()
    const { groupId } = useParams()
    const [modalStyle, setModalStyle] = useState({})
    const container = useRef()

    let windowPos = {}

    useEffect(() => {
        if (!modalPos) {
            setModalStyle({})
        } else
            setModalStyle({
                top: modalPos.top + modalPos.height + 5,
                left: modalPos.left,
            })
        calcModalPos()
    }, [container, modalPos])

    function calcModalPos() {
        if (!modalPos) {
            setModalStyle({})
            return
        } else
            setModalStyle({
                top: modalPos.top + modalPos.height + 5,
                left: modalPos.left,
            })
        windowPos.x = window.innerWidth
        windowPos.y = window.innerHeight
        if (!container.current) return
        const height = container.current.getBoundingClientRect().height
        if (windowPos.y - modalPos.top - height > 5) {
            setModalStyle({
                top: modalPos.top + modalPos.height + 5,
                left: modalPos.left,
            })
        } else {
            setModalStyle({
                top: modalPos.top - height - 5,
                left: modalPos.left,
            })
        }
    }

    function onCloseDynModal(ev) {
        ev.stopPropagation()
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: SET_MODAL_TITLE, title: '' })
    }

    if (!isModalOpen) return null
    return (
        <div
            className="dynamic-cmp"
            ref={container}
            style={modalStyle ? modalStyle : null}
        >
            <div className="dynamic-cmp-header">
                <div className="dynamic-cmp-header-title">{title}</div>
                <button className="dynamic-cmp-close" onClick={onCloseDynModal}>
                    <X className="task-icon-img" />
                </button>
            </div>
            <hr></hr>
            {modalTitle === 'Dates' && <DynCmpDates task={task} />}
            {modalTitle === 'Labels' && <DynCmpLabels task={task} />}
            {modalTitle === 'Members' && <DynCmpMembers task={task} />}
            {modalTitle === 'Edit label' && <DynCmpEditLabel task={task} />}
            {modalTitle === 'Checklist' && (
                <DynCmpChecklist
                    task={task}
                    setEditing={setEditing}
                />
            )}
            {modalTitle === 'Attachment' && (
                <DynCmpAttachment
                    boardId={boardId}
                    groupId={groupId}
                    task={task}
                />
            )}
            {modalTitle === 'Edit attachment' && (
                <DynCmpAttachmentEdit
                    boardId={boardId}
                    groupId={groupId}
                    task={task}
                />
            )}
        </div>
    )
}
