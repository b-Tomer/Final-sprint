import { useEffect, useRef } from 'react'
import {
    CLOSE_DYN_ALL_MODALS,
    OPEN_DYN_ACTIVITIES_MODAL,
    OPEN_DYN_MEMBER_PREV_MODAL,
    OPEN_DYN_FILTER_MODAL,
    OPEN_DYN_MODAL,
    SET_MODAL_TITLE,
    OPEN_DYN_ADD_MEMBER_MODAL,
} from '../store/system.reducer'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { updateBoard } from '../store/board.actions.js'
import { store } from '../store/store'
import { ReactComponent as Filter } from '../assets/img/icons/filter.svg'
import { ReactComponent as Share } from '../assets/img/icons/Share.svg'
import { ReactComponent as More } from '../assets/img/icons/dots.svg'
import { DynamicCmp } from './dynamic-cmp/dynamic-cmp.jsx'
import { ReactComponent as StarredYellow } from '../assets/img/icons/starred-yellow.svg'
import { FastAverageColor } from 'fast-average-color'
import ContrastColor from 'contrast-color'

export function BoardHeader() {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [currTitle, setCurrTitle] = useState('')
    const [currMember, setCurrMember] = useState(null)
    const [modalPos, setModalPos] = useState(null)
    const { isOpenFilterModal } = useSelector(
        (storeState) => storeState.systemModule
    )
    const [txtColor, setTxtColor] = useState(null)
    const [bgColor, setBgColor] = useState(null)
    const filterRef = useRef(null)
    const shareRef = useRef(null)
    const actRef = useRef(null)

    const { isOpenActivitiesModal } = useSelector(
        (storeState) => storeState.systemModule
    )
    const { isOpenMemberPrevModal } = useSelector(
        (storeState) => storeState.systemModule
    )
    const { isOpenAddMemberModal } = useSelector(
        (storeState) => storeState.systemModule
    )
    const fac = new FastAverageColor()

    useEffect(() => {
        printAverageColor()
    }, [board])

    function printAverageColor() {
        const img = document.createElement('img')
        img.crossOrigin = 'anonymous'
        if (!board) return
        if (!board.style) return
        if (!board.style.backgroundImage) return
        img.src = board.style.backgroundImage
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
            let children = filterRef.current.children
            for (let i = 0; i < children.length; i++) {
                children[i].style.fill = textColor
            }
            children = shareRef.current.children
            for (let i = 0; i < children.length; i++) {
                children[i].style.fill = textColor
            }
            children = actRef.current.children
            for (let i = 0; i < children.length; i++) {
                children[i].style.fill = textColor
            }
        })
    }

    const buttonClassName = board.isStarred ? 'star starred' : 'star'

    function onClickStarred(ev) {
        ev.stopPropagation()
        board.isStarred = !board.isStarred
        updateBoard(board).then(console.log)
    }

    function onOpenEditorModal(title, ev) {
        ev.stopPropagation()
        let { top, left, height } = ev.target.getBoundingClientRect()
        left = left - 270
        top = top - 38
        setModalPos({ top, left, height })
        setCurrTitle(title)
        store.dispatch({ type: SET_MODAL_TITLE, title })
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: OPEN_DYN_MODAL })
        store.dispatch({ type: OPEN_DYN_ACTIVITIES_MODAL })
    }

    function onOpenMemberModal(title, ev, member) {
        ev.stopPropagation()
        let { top, left, height } = ev.target.getBoundingClientRect()
        setModalPos({ top, left, height })
        setCurrMember(member)
        setCurrTitle(title)
        store.dispatch({ type: SET_MODAL_TITLE, title })
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: OPEN_DYN_MODAL })
        store.dispatch({ type: OPEN_DYN_MEMBER_PREV_MODAL })
    }

    async function onOpenFilter(ev, title) {
        ev.stopPropagation()
        let { top, left, height } = ev.target.getBoundingClientRect()
        setModalPos({ top, left, height })
        setCurrTitle(title)
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: SET_MODAL_TITLE, title })
        store.dispatch({ type: OPEN_DYN_FILTER_MODAL })
        store.dispatch({ type: OPEN_DYN_MODAL })
    }

    async function onAddMember(ev, title) {
        ev.stopPropagation()
        let { top, left, height } = ev.target.getBoundingClientRect()
        setModalPos({ top, left, height })
        setCurrTitle(title)
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: SET_MODAL_TITLE, title })
        store.dispatch({ type: OPEN_DYN_ADD_MEMBER_MODAL })
        store.dispatch({ type: OPEN_DYN_MODAL })
    }

    return (
        <div className="board-header-container">
            <div className="board-header-left">
                <h1
                    className="board-title"
                    style={
                        bgColor ? (txtColor ? { color: txtColor } : {}) : null
                    }
                >
                    {board.title}
                </h1>

                <button className="starred-btn" onClick={onClickStarred}>
                    {<StarredYellow className={buttonClassName} />}
                </button>
            </div>
            <div className="board-header-right">
                <button
                    className="btn-board-right filter-btn"
                    onClick={(event) => onOpenFilter(event, 'Filter')}
                >
                    <Filter className="board-header-icon" ref={filterRef} />
                    <span
                        style={
                            bgColor
                                ? txtColor
                                    ? { color: txtColor }
                                    : null
                                : null
                        }
                    >
                        Filter
                    </span>
                </button>
                {isOpenFilterModal && (
                    <DynamicCmp title={'Filter'} modalPos={modalPos} />
                )}
                <span className="separator"></span>

                {board.members && board.members.length > 0 && (
                    <div className="board-members">
                        {board.members.map((member) => (
                            <button
                                key={member._id}
                                className="board-member-btn"
                                onClick={(ev) =>
                                    onOpenMemberModal('Member card', ev, member)
                                }
                            >
                                <img src={member.imgUrl} alt="" />
                            </button>
                        ))}
                    </div>
                )}
                <button
                    className="btn-board-right"
                    onClick={(ev) => onAddMember(ev, 'Add members')}
                >
                    <Share className="board-header-icon share" ref={shareRef} />
                    <span
                        style={
                            bgColor
                                ? txtColor
                                    ? { color: txtColor }
                                    : null
                                : null
                        }
                    >
                        Share
                    </span>
                </button>

                <button
                    className="btn-board-right"
                    onClick={(ev) => onOpenEditorModal('Activities', ev)}
                >
                    <More className="board-header-icon" ref={actRef} />
                </button>
            </div>
            {isOpenActivitiesModal && (
                <DynamicCmp
                    title={currTitle}
                    modalPos={modalPos}
                    board={board}
                />
            )}
            {isOpenMemberPrevModal && (
                <DynamicCmp
                    title={currTitle}
                    modalPos={modalPos}
                    currMember={currMember}
                />
            )}
            {isOpenAddMemberModal && (
                <DynamicCmp title={currTitle} modalPos={modalPos} />
            )}
        </div>
    )
}
