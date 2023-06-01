import { TaskPreview } from "./task/task-preview";
import { ReactComponent as Plus } from '../assets/img/icons/plus.svg'
import { ReactComponent as X } from '../assets/img/icons/x.svg'
import { useState } from "react";



export function AddGroup() {

    const [isAddOpen, setIsAddOpen] = useState(false)
    const [currStyle, setCurrStyle] = useState({})



    function onOpenAddContainer() {
        setIsAddOpen(true)
        if (isAddOpen) setCurrStyle({ backgroundColor: '$clr3' })
        else setCurrStyle({})
    }

    function onAddClose() {
        setIsAddOpen(false)

    }


    return (
        <section style={currStyle} className="add-group-container">
            {!isAddOpen && <div onClick={onOpenAddContainer} className="add-list-content-closed">
                <Plus className="list-icon" />  Add another list
            </div>}
            {isAddOpen && <div className="add-list-content-opened">
                <input type="text" className="add-list-input" />
                <div className="add-btns">
                    <button className="add-item">Add list</button>
                    <button onClick={onAddClose} className="svg-holder">
                        <X className="list-icon icon-big" />
                    </button>
                </div>

            </div>}

        </section>
    )
}

