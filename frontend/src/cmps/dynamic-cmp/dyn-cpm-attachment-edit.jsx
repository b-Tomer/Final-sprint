import { useEffect, useRef, useState } from 'react'
import { ReactComponent as X } from '../../assets/img/icons/x.svg'
import { useSelector } from 'react-redux'
import { updateTask } from '../../store/task.actions'
import { CLOSE_DYN_ALL_MODALS } from '../../store/system.reducer'
import { store } from '../../store/store'


export function DynCmpAttachmentEdit({ task, boardId, groupId }) {

    const [newTitle, setNewTitle] = useState('')
    const inputRef = useRef()
    const { atc } = useSelector((storeState) => storeState.boardModule)
    useEffect(() => {
        setNewTitle(atc.title || atc.url?.split('/').pop().slice(0, 26))
        inputRef.current.focus()
    }, [])

    function onChaneAtcTitle(ev) {
        const { value } = ev.target
        setNewTitle(value)
    }

    function updateAttachment() {
        const atcIdx = task.attachments?.findIndex(a => a.id === atc.id)
        task.attachments[atcIdx].title = newTitle
        updateTask(boardId, groupId, task)
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
    }

    if (!task) return null
    return (
        <div className="edit-attachment">

            <h5>Link name</h5>
            <input ref={inputRef} className="edit-attachment-input" value={newTitle} onFocus={e => e.target.select()} onChange={onChaneAtcTitle} type="text" />
            <div className="add-btns edit-attachment-btns">
                <button onClick={updateAttachment} className="add-item-btn">Update</button>
                <button className="svg-holder">
                    <X className="list-icon icon-big" />
                </button>
            </div>
        </div>
    )
}