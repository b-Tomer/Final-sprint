import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addBoard } from '../store/board.actions.js'
import { useState, useEffect } from 'react'
import { FastAverageColor } from 'fast-average-color'
import ContrastColor from 'contrast-color'
import { useSelector } from 'react-redux'

import { Link, NavLink, Navigate } from 'react-router-dom'
import cube from '../assets/img/icons/cube.svg'
// import Logo from '../assets/img/icons/logo.svg'

import { ReactComponent as Down } from '../assets/img/icons/down.svg'
import { ReactComponent as Notifications } from '../assets/img/icons/notifications.svg'
import { ReactComponent as Info } from '../assets/img/icons/info.svg'
import { ReactComponent as Theme } from '../assets/img/icons/theme.svg'
import { ReactComponent as Search } from '../assets/img/icons/search.svg'
import { ReactComponent as Logo } from '../assets/img/icons/logo.svg'

import { boardService } from '../services/board.service.local.js'

// import {useSelector} from 'react-redux'
// import routes from '../routes'
// import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
// import { login, logout, signup } from '../store/user.actions.js'
// import { LoginSignup } from './login-signup.jsx'

export function AppHeader({ onSetfilter }) {
    const { board } = useSelector((storeState) => storeState.boardModule)

    const navigate = useNavigate()
    const [bgColor, setBgColor] = useState(null)
    const [txtColor, setTxtColor] = useState(null)

    const fac = new FastAverageColor()

    useEffect(() => {
        printAverageColor()
    }, [board])
    // const user = useSelector(storeState => storeState.userModule.user)

    // async function onLogin(credentials) {
    //     try {
    //         const user = await login(credentials)
    //         showSuccessMsg(`Welcome: ${user.fullname}`)
    //     } catch(err) {
    //         showErrorMsg('Cannot login')
    //     }
    // }
    // async function onSignup(credentials) {
    //     try {
    //         const user = await signup(credentials)
    //         showSuccessMsg(`Welcome new user: ${user.fullname}`)
    //     } catch(err) {
    //         showErrorMsg('Cannot signup')
    //     }
    // }
    // async function onLogout() {
    //     try {
    //         await logout()
    //         showSuccessMsg(`Bye now`)
    //     } catch(err) {
    //         showErrorMsg('Cannot logout')
    //     }
    // }

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
            // console.log(cc)
            console.log(textColor)
            setTxtColor(textColor)
        })
    }

    function onHandleSearch(ev) {
        const { value } = ev.target
        onSetfilter({ txt: value })
    }

    async function onNewBoard(ev) {
        ev.preventDefault()
        try {
            const title = prompt('Enter board title')
            const newBoard = boardService.getEmptyBoard()
            newBoard.title = title
            const currBoard = await addBoard(newBoard)
            navigate(`/board/${currBoard._id}`)
        } catch (error) {
            console.log('cannot add new board')
            console.log(error)
        }
    }

    function goHome() {
        navigate(`/`)
    }

    return (
        <header
            className="app-header"
            style={
                bgColor
                    ? txtColor
                        ? { backgroundColor: bgColor, color: txtColor }
                        : { backgroundColor: bgColor }
                    : null
            }
        >
            {/* <img className="cube-img" src={cube} alt="" /> */}

            <Logo className="logo-img" onClick={goHome} />
            <div className="app-logo" onClick={goHome}>
                <h3>Trellax</h3>
            </div>
            <nav className="main-nav">
                <div className="link-section">
                    <NavLink
                        className="links"
                        to="/"
                        style={
                            bgColor
                                ? txtColor
                                    ? { color: txtColor }
                                    : null
                                : null
                        }
                    >
                        Workspaces
                        <Down className="down-img" src={Down} alt="" />
                    </NavLink>
                </div>
                <div className="link-section">
                    <NavLink
                        to="/about"
                        style={
                            bgColor
                                ? txtColor
                                    ? { color: txtColor }
                                    : null
                                : null
                        }
                    >
                        Recent
                        <Down className="down-img" src={Down} alt="" />
                    </NavLink>
                </div>
                <div className="link-section">
                    <NavLink
                        to="/"
                        style={
                            bgColor
                                ? txtColor
                                    ? { color: txtColor }
                                    : null
                                : null
                        }
                    >
                        Starred
                        <Down className="down-img" src={Down} alt="" />
                    </NavLink>
                </div>
                <button
                    className="new-board"
                    onClick={onNewBoard}
                    style={
                        bgColor ? (txtColor ? { color: txtColor } : null) : null
                    }
                >
                    Create
                </button>
            </nav>
            <div className="header-actions">
                <div className="search-bar">
                    <span>
                        <Search className="search-img" src={Search} />
                    </span>
                    <input
                        onChange={onHandleSearch}
                        className="header-search"
                        type="text"
                        placeholder="Search"
                    />
                </div>

                <ul>
                    <li>
                        <Notifications
                            className="app-header-icon"
                            src={Notifications}
                        />
                    </li>
                    <li>
                        <Info className="app-header-icon" src={Info} />
                    </li>
                    <li>
                        <Theme className="app-header-icon" src={Theme} />
                    </li>
                </ul>
            </div>
        </header>
    )
}
