import { useEffect, useRef, useState } from 'react'
import { ReactComponent as X } from '../../assets/img/icons/x.svg'
import { store } from 'store/store'
import {
    CLOSE_DYN_ALL_MODALS,
    OPEN_DYN_MODAL,
    SET_MODAL_TITLE,
} from 'store/system.reducer'
import { DynamicCmp } from 'cmps/dynamic-cmp/dynamic-cmp'
import { FastAverageColor } from 'fast-average-color'
import ContrastColor from 'contrast-color'

export function TaskCover({ task, simpleCloseModal }) {
    const [isEditCover, setIsEditCover] = useState(false)
    const [modalPos, setModalPos] = useState(null)
    const [txtColor, setTxtColor] = useState(null)
    const [bgColor, setBgColor] = useState(null)
    const xRef = useRef(null)
    const fac = new FastAverageColor()

    useEffect(() => {
        printAverageColor()
    }, [task])

    function printAverageColor() {
        const img = document.createElement('img')
        img.crossOrigin = 'anonymous'
        if (!task) return
        if (!task.style) return
        if (!task.style.backgroundImage) return
        img.src = task.style.backgroundImage
        img.addEventListener('load', () => {
            const averageColor = fac.getColor(img).hex
            setBgColor(averageColor)
            const cc = new ContrastColor({
                bgColor: averageColor,
                fgDarkColor: 'dark',
                fgLightColor: 'light',
                customNamedColors: {
                    dark: '#172b4d',
                    light: '#f1f2f4',
                },
            })
            const textColor = cc.contrastColor()
            setTxtColor(textColor)
            let children = xRef.current.children
            for (let i = 0; i < children.length; i++) {
                children[i].style.fill = textColor
            }
        })
    }

    function toggleEditCover(ev) {
        const { top, left, height } = ev.target.getBoundingClientRect()
        setModalPos({ top, left, height })
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: SET_MODAL_TITLE, title: 'Cover' })
        store.dispatch({ type: OPEN_DYN_MODAL })
        setIsEditCover(true)
    }

    if (!task) return null
    return (
        <section className="task-cover">
            <button
                className="task-details-cover-close"
                onClick={simpleCloseModal}
            >
                <X className="task-icon-img" ref={xRef} />
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
            <button className="toggle-cover-btn" onClick={toggleEditCover}>
                <i
                    className="fa-solid fa-pager"
                    style={{ color: '#172b4d' }}
                ></i>
                Cover
            </button>
            {isEditCover && (
                <DynamicCmp modalPos={modalPos} title={'Cover'} task={task} />
            )}
        </section>
    )
}
