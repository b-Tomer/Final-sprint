import React from 'react';

import { useNavigate } from 'react-router-dom'
import { ReactComponent as Starred } from '../assets/img/icons/starred.svg'
import { ReactComponent as StarredYellow } from '../assets/img/icons/starred-yellow.svg'

export function BoardPreview({ board, toggleStarredStatus }) {

    const navigate = useNavigate()
    const buttonClassName = board.isStarred ? 'starred-btn starred' : 'starred-btn';

    function onClickBoard() {
        navigate(`/board/${board._id}`)
    }

    function onClickStarred(ev){
        ev.stopPropagation()
        toggleStarredStatus(board)
    }

    return (
        <div  className="board-preview" onClick={onClickBoard}>
            <h1>{board.title}</h1>
            <img src={board.style?.backgroundImage} alt="Logo" />
            <button className={buttonClassName} onClick={onClickStarred}>
                {board.isStarred ? <StarredYellow /> : <Starred />}
            </button>
        </div>
    )
}