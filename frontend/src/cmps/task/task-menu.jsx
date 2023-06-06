import { useState } from 'react';

import { ReactComponent as Clock } from '../../assets/img/icons/clock.svg'
import { ReactComponent as Member } from '../../assets/img/icons/member.svg'
import { ReactComponent as CustomFields } from '../../assets/img/icons/custom-fields.svg'
import { ReactComponent as Label } from '../../assets/img/icons/label.svg'
import { ReactComponent as CheckList } from '../../assets/img/icons/checklist.svg'
import { ReactComponent as Attachment } from '../../assets/img/icons/attachment.svg'

import { DynamicCmp } from '../dynamic-cmp/dynamic-cmp'
import { store } from '../../store/store';
import { OPEN_DYN_MODAL } from '../../store/system.reducer';


export function TaskMenu({ task }) {

    const [dynamicCmpName, setDynamicCmpName] = useState(null)

    function openDynamicCmp(name) {
        store.dispatch({ type: OPEN_DYN_MODAL })
        setDynamicCmpName(name)
    }



    return (
        <div className="window-sidebar">
            <h3 className="card-menu-title">Add to card</h3>
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
                <button className="button-link" onClick={() => openDynamicCmp('Attachment')}  >
                    <Attachment className="sidebar-icon" />
                    <span>Attachment</span> </button>
                <button className="button-link" onClick={() => openDynamicCmp('Custom Fields')} >
                    <CustomFields className="sidebar-icon" />
                    <span>Custom Fields</span> </button>
            </div>
            {dynamicCmpName && <DynamicCmp task={task} title={dynamicCmpName} />}
        </div>

    )
}




