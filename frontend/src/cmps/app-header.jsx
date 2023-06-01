import { Link, NavLink } from 'react-router-dom'
import cube from '../assets/img/icons/cube.svg'
import down from '../assets/img/icons/down.svg'

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
            <div className="app-logo">
                <h3>Trello</h3>
                </div>
            <nav className="main-nav">
                <NavLink className='links' to="/">
                    Work spaces
                    <img className='cube-img' src={down} alt="" />
                </NavLink>
                {/* <svg  ></svg> */}
                <NavLink to="/about">
                    Recent
                    <img className='cube-img' src={down} alt="" />
                </NavLink>
                <NavLink to="/bookApp">
                    Starred
                    <img className='cube-img' src={down} alt="" />
                </NavLink>

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
