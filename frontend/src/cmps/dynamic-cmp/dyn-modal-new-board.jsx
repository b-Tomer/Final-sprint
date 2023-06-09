import { ReactComponent as Lists } from '../../assets/img/icons/lists.svg'
// import Stones from '../../assets/img/backgrounds/stones.jpg'
// import Flowers from '../../assets/img/backgrounds/flowers.jpg'
// import Colors from '../../assets/img/backgrounds/colors.jpg'
// import GreenBalls from '../../assets/img/backgrounds/green-balls.jpg'
import Bg1 from '../../assets/img/background1.jpg'
import Bg2 from '../../assets/img/background2.jpg'
import Bg3 from '../../assets/img/background4.jpg'
import Bg4 from '../../assets/img/background5.jpg'

import Blue from '../../assets/img/backgrounds/blue.svg'
import DarkBlue from '../../assets/img/backgrounds/dark-blue.svg'
import Purple from '../../assets/img/backgrounds/purple.svg'
import LightPurple from '../../assets/img/backgrounds/light-purple.svg'
import orange from '../../assets/img/backgrounds/orange.svg'
import { showErrorMsg, showSuccessMsg } from 'services/event-bus.service'
import { addBoard } from 'store/board.actions'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { boardService } from 'services/board.service'
import { useRef } from 'react'
import { userService } from 'services/user.service'
import { store } from 'store/store'
import { CLOSE_DYN_ALL_MODALS } from 'store/system.reducer'

export function DynCmpNewBoard() {
    const imgRef = useRef()
    const titleRef = useRef()
    const navigate = useNavigate()
    async function onAddBoard() {
        const user = userService.getLoggedinUser()
        const board = boardService.getEmptyBoard()
        board.title = titleRef.current.value
        console.log(user)
        board.members = [user?._id] || []
        board.style = { backgroundImage: imgRef.current.src }
        try {
            const savedBoard = await addBoard(board)
            showSuccessMsg(`Board added (id: ${savedBoard._id})`)
            navigate(`/board/${savedBoard._id}`)
        } catch (err) {
            showErrorMsg('Cannot add board')
        } finally {
            store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        }
    }

    function onChosseBg(bg) {
        imgRef.current.src = bg
    }

    return (
        <section>
            <div className="create-board-preview">
                <img ref={imgRef} src={Bg1} alt="" className="img-bottom" />
                <Lists className="svg-img" />
            </div>
            <h3>Backgrounds</h3>
            <div className="backgrounds-container">
                <img
                    onClick={() => onChosseBg(Bg1)}
                    src={Bg1}
                    alt=""
                    className="bg-img"
                />
                <img
                    onClick={() => onChosseBg(Bg2)}
                    src={Bg2}
                    alt=""
                    className="bg-img"
                />
                <img
                    onClick={() => onChosseBg(Bg3)}
                    src={Bg3}
                    alt=""
                    className="bg-img"
                />
                <img
                    onClick={() => onChosseBg(Bg4)}
                    src={Bg4}
                    alt=""
                    className="bg-img"
                />
            </div>
            <div className="colors-container">
                <img
                    onClick={() => onChosseBg(Blue)}
                    src={Blue}
                    alt=""
                    className="bg-colors"
                />
                <img
                    onClick={() => onChosseBg(DarkBlue)}
                    src={DarkBlue}
                    alt=""
                    className="bg-colors"
                />
                <img
                    onClick={() => onChosseBg(Purple)}
                    src={Purple}
                    alt=""
                    className="bg-colors"
                />
                <img
                    onClick={() => onChosseBg(LightPurple)}
                    src={LightPurple}
                    alt=""
                    className="bg-colors"
                />
                <img
                    onClick={() => onChosseBg(orange)}
                    src={orange}
                    alt=""
                    className="bg-colors"
                />
            </div>
            <h3>Board title</h3>
            <input ref={titleRef} placeholder="Required"></input>
            <button onClick={onAddBoard} className="create-btn">
                Create
            </button>
        </section>
    )
}
