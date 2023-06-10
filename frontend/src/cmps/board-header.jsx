import { useEffect } from 'react'
import { boardService } from '../services/board.service.local.js'
import {
    CLOSE_DYN_ALL_MODALS,
    OPEN_DYN_ACTIVITIES_MODAL,
    OPEN_DYN_MEMBER_PREV_MODAL,
    OPEN_DYN_FILTER_MODAL,
    OPEN_DYN_MODAL,
    SET_MODAL_TITLE,
} from '../store/system.reducer'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { loadBoard } from '../store/board.actions.js'
import { store } from '../store/store'
import { ReactComponent as Star } from '../assets/img/icons/star.svg'
import { ReactComponent as Visability } from '../assets/img/icons/members.svg'
import { ReactComponent as EmptyLogo } from '../assets/img/icons/emptyLogo.svg'
import { ReactComponent as Down } from '../assets/img/icons/down.svg'
import { ReactComponent as PowerUps } from '../assets/img/icons/rocket.svg'
import { ReactComponent as Automation } from '../assets/img/icons/bolt.svg'
import { ReactComponent as Plus } from '../assets/img/icons/plus.svg'
import { ReactComponent as Filter } from '../assets/img/icons/filter.svg'
import { ReactComponent as Share } from '../assets/img/icons/Share.svg'
import { ReactComponent as More } from '../assets/img/icons/dots.svg'
import { DynamicCmp } from './dynamic-cmp/dynamic-cmp.jsx'

export function BoardHeader({ board }) {
    const { boardId } = useParams()
    const [currTitle, setCurrTitle] = useState('')
    const [currMember, setCurrMember] = useState(null)
    const [modalPos, setModalPos] = useState(null)
    const { isOpenFilterModal } = useSelector(
        (storeState) => storeState.systemModule
    )

    const { isOpenActivitiesModal } = useSelector(
        (storeState) => storeState.systemModule
    )
    const { isOpenMemberPrevModal } = useSelector(
        (storeState) => storeState.systemModule
    )

    useEffect(() => {
        loadBoard(boardId)
    }, [])

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

    useEffect(() => {
        loadBoard(boardId)
    }, [])

    async function onOpenFilter(ev) {
        let { top, left, height } = ev.target.getBoundingClientRect()
        setModalPos({ top, left, height })
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: SET_MODAL_TITLE, title: 'Filter' })
        store.dispatch({ type: OPEN_DYN_FILTER_MODAL })
        store.dispatch({ type: OPEN_DYN_MODAL })
    }

    // function getMemberImg(memberId) {
    //     if (!board.members) return
    //     const currMember = board?.members.find(
    //         (member) => member._id === memberId
    //     )
    //     if (currMember.imgUrl) {
    //         return currMember.imgUrl
    //     } else {
    //         return 'https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg'
    //     }
    // }

    return (
        <div className="board-header-container">
            <div className="board-header-left">
                <h1 className="board-title">{board.title}</h1>
                <button>
                    <Star className="board-header-icon" />
                </button>
                {board.members && board.members.length > 0 && (
                    <div className="board-members">
                        {board.members.map((member) => (
                            <button
                                // onClick={(ev) => onOpenMemberPreview(ev, memberId)}
                                key={member._id}
                                className="board-member-btn"
                                onClick={(ev) =>
                                    onOpenMemberModal('Member card', ev, member)
                                }
                            >
                                <img src={member.imgUrl} alt="" />
                            </button>
                        ))}
                        <button className="add-member">
                            <Plus />
                        </button>
                    </div>
                )}
                {/* <button>
                    <Visability className="board-header-icon" />
                </button>
                <button className="btn-board-select">
                    <EmptyLogo className="board-header-icon" />
                    <span>Board</span>
                    <Down className="board-header-icon" />
                </button> */}
            </div>
            <div className="board-header-right">
                {/* <button className="btn-board-right">
                    <PowerUps className="board-header-icon" />
                    <span>Power-Ups</span>
                </button>
                <button className="btn-board-right">
                    <Automation className="board-header-icon" />
                    <span>Automation</span>
                </button> */}
                <button className="btn-board-right"></button>
                <button className="btn-board-right" onClick={onOpenFilter}>
                    <Filter className="board-header-icon" />
                    <span>Filter</span>
                </button>
                {isOpenFilterModal && (
                    <DynamicCmp title={'Filter'} modalPos={modalPos} />
                )}
                <span className="separator"></span>
                <button className="btn-board-right">
                    <Share className="board-header-icon" />
                    <span>Share</span>
                </button>
                <button
                    className="btn-board-right"
                    onClick={(ev) => onOpenEditorModal('Activities', ev)}
                >
                    <More className="board-header-icon" />
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
        </div>
    )
}
