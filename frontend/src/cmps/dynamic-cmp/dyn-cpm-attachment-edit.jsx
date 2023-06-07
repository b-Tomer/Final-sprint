import { useState } from 'react'
import { ReactComponent as X } from '../../assets/img/icons/x.svg'


export function DynCmpAttachmentEdit(task, atc) {

    const [newTitle, setNewTitle] = useState('')

   
    function onChaneAtcTitle(ev) {
        const { value } = ev.target
        setNewTitle(value)
    }
    
    function updateAttachment() {
        console.log(atc)

    }

    if (!task) return ''
    return (
        <div className="edit-attachment">

            <h5>Link name</h5>
            <input className="edit-attachment-input" onChange={onChaneAtcTitle} type="text" />
            <div className="add-btns edit-attachment-btns">
                <button onClick={updateAttachment} className="add-item-btn">Update</button>
                <button className="svg-holder">
                    <X className="list-icon icon-big" />
                </button>
            </div>
        </div>
    )
}