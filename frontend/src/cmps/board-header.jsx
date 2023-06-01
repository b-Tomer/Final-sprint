import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { boardService } from '../services/board.service.local.js'
import { useParams } from 'react-router-dom'
import { loadBoard } from '../store/board.actions.js'
import star from '../assets/img/icons/star.svg'

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
                    <svg xmlns={star}></svg>
                </button>
                <button></button>
                <button></button>
            </div>
            <div className="board-header-right"></div>
        </div>
    )
}
