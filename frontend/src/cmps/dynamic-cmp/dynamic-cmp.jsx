import { ReactComponent as X } from '../../assets/img/icons/x.svg'

import { DynCmpMembers } from './dyn-cmp-members'
import { DynCmpLabels } from './dyn-cmp-labels'
import { DynCmpChecklist } from './dyn-cmp-checklist'
import { DynCmpDates } from './dyn-cmp-dates'
import { DynCmpAttachment } from './dyn-cmp-attachment'
import { DynCmpAttachmentEdit } from './dyn-cpm-attachment-edit'
import { CLOSE_DYN_MODAL } from '../../store/system.reducer'
import { useSelector } from 'react-redux'
import { store } from '../../store/store'
import { useParams } from 'react-router-dom'
import { DynCmpEditLabel } from './dyn-cmp-edit-label'

export function DynamicCmp({ task, title, setEditing }) {
    const { isModalOpen } = useSelector((storeState) => storeState.systemModule)
    const { boardId } = useParams()
    const { groupId } = useParams()
    function onCloseDynModal() {
        store.dispatch({ type: CLOSE_DYN_MODAL })
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
            {title === 'Dates' && <DynCmpDates />}
            {title === 'Labels' && <DynCmpLabels task={task} />}
            {title === 'Members' && <DynCmpMembers task={task} />}
            {title === 'Edit label' && <DynCmpEditLabel task={task} />}
            {title === 'Checklist' && <DynCmpChecklist task={task} onCloseDynModal={onCloseDynModal} setEditing={setEditing} />}
            {title === 'Attachment' && <DynCmpAttachment boardId={boardId} groupId={groupId} task={task} />}
            {title === 'Edit attachment' && <DynCmpAttachmentEdit boardId={boardId} groupId={groupId} task={task} />}
        </div>
    )
}
