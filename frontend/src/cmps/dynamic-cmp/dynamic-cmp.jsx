import { ReactComponent as X } from '../../assets/img/icons/x.svg'

import { DynCmpMembers } from './dyn-cmp-members'
import { DynCmpLabels } from './dyn-cmp-labels'
import { DynCmpChecklist } from './dyn-cmp-checklist'
import { DynCmpDates } from './dyn-cmp-dates'
import { DynCmpAttachment } from './dyn-cmp-attachment'
import { DynCmpAttachmentEdit } from './dyn-cpm-attachment-edit'
import { useEffect, useState } from 'react'


export function DynamicCmp({ task, title }) {

    const [isModalOpen, setIsModalOpen] = useState(true)

    function onCloseDynModal() {
        setIsModalOpen(false)
    }

    if (!isModalOpen) return ''
    return (
        <div className="dynamic-cmp">
            <div className="dynamic-cmp-header">
                <div className="dynamic-cmp-header-title">{title}</div>
                <button
                    className="dynamic-cmp-close"
                    onClick={onCloseDynModal}
                > <X className="task-icon-img" />
                </button>
            </div>
            <hr></hr>

            {title === "Members" && <DynCmpMembers task={task} />}
            {title === "Labels" && <DynCmpLabels task={task} />}
            {title === "Checklist" && <DynCmpChecklist />}
            {title === "Dates" && <DynCmpDates />}
            {title === "Attachment" && <DynCmpAttachment />}
            {title === "Edit attachment" && <DynCmpAttachmentEdit task={task} />}
        </div>
    )
}