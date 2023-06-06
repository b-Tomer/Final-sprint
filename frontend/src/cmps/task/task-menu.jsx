import { useState } from 'react';

import { ReactComponent as Clock } from '../../assets/img/icons/clock.svg'
import { ReactComponent as Member } from '../../assets/img/icons/member.svg'
import { ReactComponent as CustomFields } from '../../assets/img/icons/custom-fields.svg'
import { ReactComponent as Label } from '../../assets/img/icons/label.svg'
import { ReactComponent as CheckList } from '../../assets/img/icons/checklist.svg'
import { ReactComponent as Attachment } from '../../assets/img/icons/attachment.svg'

import { DynamicCmp } from '../dynamic-cmp/dynamic-cmp'


export function TaskMenu({ task }) {

    const [dynamicCmpName, setDynamicCmpName] = useState(null)

    const openDynamicCmp = (name) => {
        setDynamicCmpName(name)
    }



    return (
        <div className="window-sidebar">
            <h3 className="mod-no-top-margin js-sidebar-add-heading">Add to card</h3>
            <div className="add-to-card-menu">
                <button className="button-link" onClick={() => openDynamicCmp('Members')}>
                    <Member className="sidebar-icon" />
                    <span>Members</span>
                </button>
                <button className="button-link" onClick={() => openDynamicCmp('Labels')}  >
                    <Label className="sidebar-icon" />
                    <span>Labels</span> </button>
                <button className="button-link" onClick={() => openDynamicCmp('Checklist')} >
                    <CheckList className="sidebar-icon" />
                    <span>Checklist</span> </button>
                <button className="button-link" onClick={() => openDynamicCmp('Dates')} >
                    <Clock className="sidebar-icon" />
                    <span>Dates</span> </button>
                <button className="button-link" >
                    <Attachment className="sidebar-icon" onClick={() => openDynamicCmp('Attachment')} />
                    <span>Attachment</span> </button>
                <button className="button-link" >
                    <CustomFields className="sidebar-icon" onClick={() => openDynamicCmp('Custom Fields')} />
                    <span>Custom Fields</span> </button>
            </div>
            {dynamicCmpName && <DynamicCmp task={task} title={dynamicCmpName} />}
        </div>

    )
}




