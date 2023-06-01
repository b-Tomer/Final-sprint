import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Background1 from '../../src/assets/img/backgrounds/asset0.jpeg'
import Background2 from '../../src/assets/img/backgrounds/asset1.jpeg'
import Background3 from '../../src/assets/img/backgrounds/asset2.jpeg'
import Background4 from '../../src/assets/img/backgrounds/asset4.jpeg'
import Background5 from '../../src/assets/img/backgrounds/asset5.jpeg'
import Background6 from '../../src/assets/img/backgrounds/asset6.jpeg'
import Background7 from '../../src/assets/img/backgrounds/asset7.jpeg'


import { ReactComponent as Starred } from '../assets/img/icons/starred.svg'
import { ReactComponent as StarredYellow } from '../assets/img/icons/starred-yellow.svg'

export function BoardPreview({ board, toggleStarredStatus }) {
    // const [isStarred, setIsStarred] = useState(false);
    ////////////////////////////  CHANGE TO CLOUDINARY /////////////////////////////
    const images = [Background1, Background2, Background3, Background4, Background5, Background6, Background7]
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex]
    ////////////////////////////  CHANGE TO CLOUDINARY /////////////////////////////

    const navigate = useNavigate()

    const buttonClassName = board.isStarred ? 'starred-btn starred' : 'starred-btn';

    // useEffect(() => {
    // }, [board.isStarred])

    function onClickBoard() {
        navigate(`/board/${board._id}`)
        console.log(board._id, 'board._id')
    }

    const onClickStarred = (event) => {
        event.stopPropagation()
        toggleStarredStatus(board)
    }

    return (
        <div className="board-preview" onClick={onClickBoard}>
            <h1>{board.title}</h1>
            <img src={randomImage} alt="Logo" />
            <button className={buttonClassName} onClick={onClickStarred}>
                {board.isStarred ? <StarredYellow /> : <Starred />}
            </button>
        </div>
    )
}