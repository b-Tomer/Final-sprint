import { useState } from 'react'
import { ReactComponent as X } from '../../assets/img/icons/x.svg'
import { store } from 'store/store'
import { CLOSE_DYN_ALL_MODALS, OPEN_DYN_MODAL, SET_MODAL_TITLE } from 'store/system.reducer'
import { DynamicCmp } from 'cmps/dynamic-cmp/dynamic-cmp'

export function TaskCover({ task, simpleCloseModal }) {
    const [isEditCover, setIsEditCover] = useState(false)
    const [modalPos, setModalPos] = useState(null)
    function toggleEditCover(ev) {
        const { top, left, height } = ev.target.getBoundingClientRect()
        setModalPos({ top, left, height })
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: SET_MODAL_TITLE, title: "Cover" })
        store.dispatch({ type: OPEN_DYN_MODAL })
        setIsEditCover(true)
    }



    if (!task) return null
    return (
        <section className="task-cover" >

            <button
                className="task-details-cover-close"
                onClick={simpleCloseModal}  >
                <X className="task-icon-img" />
            </button>

            {(task.style?.bgColor || task.style?.backgroundImage) && (
                <div
                    className="task-cover"
                    style={{
                        backgroundColor: task.style.bgColor,
                        backgroundImage: `url(${task.style.backgroundImage})`,
                    }}
                ></div>
            )}
            <button className='toggle-cover-btn' onClick={toggleEditCover}>
                <i className="fa-solid fa-pager" style={{ color: "#172b4d" }}></i>
                Cover</button>
            {isEditCover && (
                <DynamicCmp modalPos={modalPos} title={'Cover'} task={task} />
            )}
        </section>
    )
}
