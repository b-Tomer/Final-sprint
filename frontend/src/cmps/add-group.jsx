import { ReactComponent as Plus } from '../assets/img/icons/plus.svg'
import { ReactComponent as X } from '../assets/img/icons/x.svg'
import { useState, useRef, useEffect } from "react";



export function AddGroup({ addGroup }) {

    const [isAddOpen, setIsAddOpen] = useState(false)
    const [currStyle, setCurrStyle] = useState({})
    const [groupTitle, setGroupTitle] = useState('')

    const inputRef = useRef();
    const scrollRef = useRef();

    function onOpenAddContainer() {
        setIsAddOpen(true)
        if (isAddOpen) setCurrStyle({ backgroundColor: '$clr3' })
        else setCurrStyle({})
    }

    function onAddClose() {
        setIsAddOpen(false)
    }

    function handleChange(ev) {
        const { value } = ev.target
        setGroupTitle(value)
    }

    function onAddGroup(ev) {
        ev.preventDefault()
        addGroup(groupTitle)
        setGroupTitle('')
        onAddClose()
        onOpenAddContainer()
    }


    return (
        <section style={currStyle} className="add-group-container">
            {!isAddOpen && <div onClick={onOpenAddContainer} className="add-list-content-closed">
                <Plus className="list-icon" />  Add another list
            </div>}
            {isAddOpen && <div className="add-list-content-opened">
                <form onSubmit={onAddGroup} >
                    <input
                        value={groupTitle}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter list title..."
                        className="add-list-input" />
                    <div className="add-btns">
                        <button onClick={onAddGroup} className="add-item-btn">Add list</button>
                        <button onClick={onAddClose} className="svg-holder">
                            <X className="list-icon icon-big" />
                        </button>
                    </div>
                </form>
            </div>}
        </section>
    )
}

