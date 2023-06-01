import React from 'react';
import Background1 from '../../src/assets/img/backgrounds/asset0.jpeg'
import Background2 from '../../src/assets/img/backgrounds/asset1.jpeg'
import Background3 from '../../src/assets/img/backgrounds/asset2.jpeg'
import Background4 from '../../src/assets/img/backgrounds/asset4.jpeg'
import Background5 from '../../src/assets/img/backgrounds/asset5.jpeg'
import Background6 from '../../src/assets/img/backgrounds/asset6.jpeg'
import Background7 from '../../src/assets/img/backgrounds/asset7.jpeg'

import { ReactComponent as Starred } from '../assets/img/icons/starred.svg'

export function BoardPreview({ board }) {
    ////////////////////////////  CHANGE TO CLOUDINARY /////////////////////////////
    const images = [Background1, Background2, Background3, Background4, Background5, Background6, Background7]
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    ////////////////////////////  CHANGE TO CLOUDINARY /////////////////////////////

    return (
        <div>
            <div className="board-preview">
                <h1>{board.title}</h1>
                <img src={randomImage} alt="Logo" />
                <button> <Starred className='starred-btn' /></button>

            </div>
        </div>

        // <a href="'../../src/assets/img/backgrounds/asset0.jpeg'" className='' >
        //     <h3> {<h1>{board.title}</h1>}</h3>
        //     <div className='board-star'></div>
        // </a>


    )
}