import { useEffect } from 'react'
import { boardService } from '../services/board.service.local.js'
import {
    CLOSE_DYN_ALL_MODALS,
    OPEN_DYN_ACTIVITIES_MODAL,
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
import { ReactComponent as Filter } from '../assets/img/icons/filter.svg'
import { ReactComponent as Share } from '../assets/img/icons/Share.svg'
import { ReactComponent as More } from '../assets/img/icons/dots.svg'
import { DynamicCmp } from './dynamic-cmp/dynamic-cmp.jsx'

export function BoardHeader({ board }) {
    const { boardId } = useParams()
    const [currTitle, setCurrTitle] = useState('')
    const [modalPos, setModalPos] = useState(null)
    const { isOpenActivitiesModal } = useSelector(
        (storeState) => storeState.systemModule
    )

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

    useEffect(() => {
        loadBoard(boardId)
    }, [])

    return (
        <div className="board-header-container">
            <div className="board-header-left">
                <h1 className="board-title">{board.title}</h1>
                <button>
                    <Star className="board-header-icon" />
                </button>
                <button>
                    <Visability className="board-header-icon" />
                </button>
                <button className="btn-board-select">
                    <EmptyLogo className="board-header-icon" />
                    <span>Board</span>
                    <Down className="board-header-icon" />
                </button>
            </div>
            <div className="board-header-right">
                <button className="btn-board-right">
                    <PowerUps className="board-header-icon" />
                    <span>Power-Ups</span>
                </button>
                <button className="btn-board-right">
                    <Automation className="board-header-icon" />
                    <span>Automation</span>
                </button>
                <button className="btn-board-right">
                    <Filter className="board-header-icon" />
                    <span>Filter</span>
                </button>
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
        </div>
    )
}
