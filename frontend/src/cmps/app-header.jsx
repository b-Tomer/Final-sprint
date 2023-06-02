import React from 'react';

import { Link, NavLink } from 'react-router-dom'
import cube from '../assets/img/icons/cube.svg'
// import down from '../assets/img/icons/down.svg'
import Logo from '../assets/img/icons/logo.svg'

import { ReactComponent as Down } from '../assets/img/icons/down.svg'







// import {useSelector} from 'react-redux'
// import routes from '../routes'
// import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
// import { login, logout, signup } from '../store/user.actions.js'
// import { LoginSignup } from './login-signup.jsx'

export function AppHeader() {
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
                        <img className='down-img' src={Down} alt="" />
                    </NavLink>
                </div>
                <div className="link-section">
                    <NavLink to="/about">
                        Recent
                        <img className='down-img' src={down} alt="" />
                    </NavLink>
                </div>
                <div className="link-section">
                    <NavLink to="/bookApp">
                        Starred
                        <img className='down-img' src={down} alt="" />
                    </NavLink>
                </div>
            </nav>
            {/* <button>Create</button> */}
            {/* <div className="header-actions"> */}
            {/* <input
                    className="header-search"
                    type="text"
                    placeholder="Search"
                /> */}

            {/* <ul>
                    <li className="notifications"></li>
                    <li className="Information"></li>
                    <li className="Theme"></li>
                    <li className="Account"></li>
                </ul> */}
            {/* </div> */}
        </header>

    )
}
