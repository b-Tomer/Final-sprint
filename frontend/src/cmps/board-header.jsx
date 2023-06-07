import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { boardService } from '../services/board.service.local.js'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { loadBoard } from '../store/board.actions.js'
import { ReactComponent as Star } from '../assets/img/icons/star.svg'
import { ReactComponent as Visability } from '../assets/img/icons/members.svg'
import { ReactComponent as EmptyLogo } from '../assets/img/icons/emptyLogo.svg'
import { ReactComponent as Down } from '../assets/img/icons/down.svg'
import { ReactComponent as PowerUps } from '../assets/img/icons/rocket.svg'
import { ReactComponent as Automation } from '../assets/img/icons/bolt.svg'
import { ReactComponent as Filter } from '../assets/img/icons/filter.svg'
import { ReactComponent as Share } from '../assets/img/icons/Share.svg'
import { ReactComponent as More } from '../assets/img/icons/dots.svg'

export function BoardHeader() {
    const { boardId } = useParams()
    const { board } = useSelector((storeState) => storeState.boardModule)

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
                <button className="btn-board-right">
                    <More className="board-header-icon" />
                </button>
            </div>
        </div>
    )
}
