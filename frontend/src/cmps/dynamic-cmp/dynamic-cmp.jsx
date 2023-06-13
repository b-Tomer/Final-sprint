import { ReactComponent as X } from '../../assets/img/icons/x.svg'
import { useEffect, useRef, useState } from 'react'
import { DynCmpMembers } from './dyn-cmp-members'
import { DynCmpLabels } from './dyn-cmp-labels'
import { DynCmpChecklist } from './dyn-cmp-checklist'
import { DynCmpDates } from './dyn-cmp-dates'
import { DynCmpAttachment } from './dyn-cmp-attachment'
import { DynCmpAttachmentEdit } from './dyn-cpm-attachment-edit'
import { Filter } from '../filter'
import {
    CLOSE_DYN_ALL_MODALS,
    SET_MODAL_TITLE,
} from '../../store/system.reducer'
import { useSelector } from 'react-redux'
import { store } from '../../store/store'
import { useParams } from 'react-router-dom'
import { DynCmpEditLabel } from './dyn-cmp-edit-label'
import { DynCmpActivities } from './dyn-cmp-activity'
import { DynCmpNewBoard } from './dyn-modal-new-board'
import { DynCmpMemberPreview } from './dyn-cmp-memeber-preview'
import { DynCmpAddMember } from './dyn-cmp-add-member'
import { CoverDynModal } from './dyn-modal-cover'

export function DynamicCmp({
    task,
    title,
    setEditing,
    modalPos,
    board,
    currMember,
}) {
    const { isModalOpen } = useSelector((storeState) => storeState.systemModule)
    const { modalTitle } = useSelector((storeState) => storeState.systemModule)
    const { boardId } = useParams()
    const { groupId } = useParams()
    const [modalStyle, setModalStyle] = useState({ visibility: 'hidden' })
    const containerRef = useRef(null)

    useEffect(() => {
        calcModalPos()
        window.addEventListener('resize', calcModalPos)
        return () => {
            window.removeEventListener('resize', calcModalPos)
        }
    }, [modalPos])

    function calcModalPos() {
        if (!modalPos || !isModalOpen) return
        const containerRect = containerRef.current.getBoundingClientRect()
        const height = containerRect.height
        const width = containerRect.width
        const top = modalPos.top
        const left = modalPos.left
        const windowPos = {
            x: window.innerWidth,
            y: window.innerHeight,
        }
        const scrollPos = {
            x: window.scrollX || window.pageXOffset,
            y: window.scrollY || window.pageYOffset,
        }
        let modalTop
        let modalLeft
        if (top - scrollPos.y + 48 + height > windowPos.y) {
            modalTop = Math.max(scrollPos.y + windowPos.y - height - 48, 48)
        } else {
            modalTop = top + modalPos.height + 5
        }
        modalLeft = left - 5
        if (modalLeft + width > windowPos.x) {
            modalLeft = windowPos.x - width - 15
        }
        setModalStyle({
            top: modalTop,
            left: modalLeft,
            visibility: 'visible',
        })
    }

    function onCloseDynModal(ev) {
        ev.stopPropagation()
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: SET_MODAL_TITLE, title: '' })
    }
    if (!isModalOpen) return null

    return (
        <div className="dynamic-cmp" ref={containerRef} style={modalStyle}>
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
            {modalTitle === 'New board' && <DynCmpNewBoard />}
            {modalTitle === 'Cover' && <CoverDynModal task={task} />}
            {modalTitle === 'Checklist' && (
                <DynCmpChecklist task={task} setEditing={setEditing} />
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
            {modalTitle === 'Activities' && <DynCmpActivities board={board} />}
            {modalTitle === 'Member card' && (
                <DynCmpMemberPreview board={board} currMember={currMember} />
            )}
            {modalTitle === 'Filter' && <Filter board={board} />}
            {modalTitle === 'Add members' && <DynCmpAddMember />}
        </div>
    )
}
