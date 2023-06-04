import React from 'react';

import { Link, NavLink } from 'react-router-dom'
import cube from '../assets/img/icons/cube.svg'
import Logo from '../assets/img/icons/logo.svg'

import { ReactComponent as Down } from '../assets/img/icons/down.svg'
import { ReactComponent as Notifications } from '../assets/img/icons/notifications.svg'
import { ReactComponent as Info } from '../assets/img/icons/info.svg'
import { ReactComponent as Theme } from '../assets/img/icons/theme.svg'
import { ReactComponent as Search } from '../assets/img/icons/search.svg'







// import {useSelector} from 'react-redux'
// import routes from '../routes'
// import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
// import { login, logout, signup } from '../store/user.actions.js'
// import { LoginSignup } from './login-signup.jsx'

export function AppHeader({onSetfilter}) {
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

    function onHandleSearch(ev){
        const {value} = ev.target 
        onSetfilter({search:value})
    }



    return (
        <header className="app-header">
            <img className='cube-img' src={cube} alt="" />
            <img className='logo-img' src={Logo} alt="Logo" />
            <div className="app-logo">
                <h3>Trello</h3>
            </div>
            <nav className="main-nav">
                <div className='link-section'>
                    <NavLink className='links' to="/">
                        Workspaces
                        <Down className='down-img' src={Down} alt="" />
                    </NavLink>
                </div>
                <div className="link-section">
                    <NavLink to="/about">
                        Recent
                        <Down className='down-img' src={Down} alt="" />
                    </NavLink>
                </div>
                <div className="link-section">
                    <NavLink to="/bookApp">
                        Starred
                        <Down className='down-img' src={Down} alt="" />
                    </NavLink>
                </div>
            </nav>
            <button>Create</button>
            <div className="header-actions">
                <div className='search-bar'>
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
                    <li >
                        <Notifications className="app-header-icon" src={Notifications} />
                    </li>
                    <li >
                        <Info className="app-header-icon" src={Info} />
                    </li>
                    <li >
                        <Theme className="app-header-icon" src={Theme} />
                    </li>
                </ul>
            </div>
        </header>

    )
}
