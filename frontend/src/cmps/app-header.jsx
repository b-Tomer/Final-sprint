import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addBoard } from '../store/board.actions.js'

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
    const navigate = useNavigate()
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
        <header className="app-header">
            {/* <img className="cube-img" src={cube} alt="" /> */}
            <Logo className="logo-img" onClick={goHome} />
            <div className="app-logo" onClick={goHome}>
                <h3>Trellax</h3>
            </div>
            <nav className="main-nav">
                <div className="link-section">
                    <NavLink className="links" to="/">
                        Workspaces
                        <Down className="down-img" src={Down} alt="" />
                    </NavLink>
                </div>
                <div className="link-section">
                    <NavLink to="/about">
                        Recent
                        <Down className="down-img" src={Down} alt="" />
                    </NavLink>
                </div>
                <div className="link-section">
                    <NavLink to="/bookApp">
                        Starred
                        <Down className="down-img" src={Down} alt="" />
                    </NavLink>
                </div>
                <button className="new-board" onClick={onNewBoard}>
                    Create
                </button>
            </nav>
            {/* <button>Create</button> */}
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
