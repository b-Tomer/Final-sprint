import { ReactComponent as X } from '../../assets/img/icons/x.svg'

import { DynCmpMembers } from './dyn-cmp-members'
import { DynCmpLabels } from './dyn-cmp-labels'
import { DynCmpChecklist } from './dyn-cmp-checklist'
import { DynCmpDates } from './dyn-cmp-dates'
import { DynCmpAttachment } from './dyn-cmp-attachment'
import { DynCmpAttachmentEdit } from './dyn-cpm-attachment-edit'
import {
    CLOSE_DYN_ALL_MODALS,
    SET_MODAL_TITLE,
} from '../../store/system.reducer'
import { useSelector } from 'react-redux'
import { store } from '../../store/store'
import { useParams } from 'react-router-dom'
import { DynCmpEditLabel } from './dyn-cmp-edit-label'

export function DynamicCmp({ task, title, setEditing }) {
    const { isModalOpen } = useSelector((storeState) => storeState.systemModule)
    const { modalTitle } = useSelector((storeState) => storeState.systemModule)
    const { boardId } = useParams()
    const { groupId } = useParams()

    function onCloseDynModal() {
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: SET_MODAL_TITLE, title: '' })
    }

    if (!isModalOpen) return ''
    return (
        <div className="dynamic-cmp">
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
                    onCloseDynModal={onCloseDynModal}
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
