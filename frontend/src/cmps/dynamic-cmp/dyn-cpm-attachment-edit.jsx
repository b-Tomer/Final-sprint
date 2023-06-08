import { useEffect, useRef, useState } from 'react'
import { ReactComponent as X } from '../../assets/img/icons/x.svg'


export function DynCmpAttachmentEdit(task, atc) {

    const [newTitle, setNewTitle] = useState(atc.title || atc.url?.split('/').pop().slice(0, 26))
    const [taskToUpdate, setTaskToUpdate] = useState({})
    const inputRef= useRef()
    useEffect(() => {
        setNewTitle(atc.title)
        setTaskToUpdate(task)
        inputRef.current.focus()
    }, [])

    function onChaneAtcTitle(ev) {
        const { value } = ev.target
        setNewTitle(value)
    }

    function updateAttachment() {
       const atcIdx = task.attachments?.findIndex(a => a.id === atc.id)
        task.atc[atcIdx].title = newTitle
        console.log(task)
    }

    if (!task) return null
    return (
        <div className="edit-attachment">

            <h5>Link name</h5>
            <input ref={inputRef} className="edit-attachment-input" value={newTitle} onChange={onChaneAtcTitle} type="text" />
            <div className="add-btns edit-attachment-btns">
                <button onClick={updateAttachment} className="add-item-btn">Update</button>
                <button className="svg-holder">
                    <X className="list-icon icon-big" />
                </button>
            </div>
        </div>
    )
}