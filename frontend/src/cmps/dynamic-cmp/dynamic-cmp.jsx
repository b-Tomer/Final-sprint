import { ReactComponent as X } from '../../assets/img/icons/x.svg'

import { DynCmpMembers } from './dyn-cmp-members'
import { DynCmpLabels } from './dyn-cmp-labels'
import { DynCmpChecklist } from './dyn-cmp-checklist'
import { DynCmpDates } from './dyn-cmp-dates'
import { DynCmpAttachment } from './dyn-cmp-attachment'


export function DynamicCmp({ task, title }) {

    return (
        <div className="dynamic-cmp">
            <div className="dynamic-cmp-header">
                <div className="dynamic-cmp-header-title">{title}</div>
                <button
                    className="dynamic-cmp-close"
                // onClick={}  
                > <X className="task-icon-img" />
                </button>
            </div>
            <hr></hr>

            {title === "Members" && <DynCmpMembers task={task} />}
            {title === "Labels" && <DynCmpLabels task={task} />}
            {title === "Checklist" && <DynCmpChecklist task={task} />}
            {title === "Dates" && <DynCmpDates task={task} />}
            {title === "Attachment" && <DynCmpAttachment task={task} />}
        </div>
    )
}