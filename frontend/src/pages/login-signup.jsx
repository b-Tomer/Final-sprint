import { useState, useEffect } from 'react'
import { userService } from '../services/user.service'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as LeftImg } from '../assets/img/icons/trello-pic-left.svg'
import { ReactComponent as RightImg } from '../assets/img/icons/trello-pic-right.svg'
import { ReactComponent as MicrosoftLogo } from '../assets/img/icons/microsoft-logo.svg'
import { ReactComponent as GoogleLogo } from '../assets/img/icons/google-logo.svg'
import { ReactComponent as SlackLogo } from '../assets/img/icons/slack-logo.svg'
import { ReactComponent as AppleLogo } from '../assets/img/icons/apple-logo.svg'

export function LoginSignup() {
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        fullname: '',
    })
    const [isSignup, setIsSignup] = useState(true)
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const users = await userService.getUsers()
        setUsers(users)
    }

    function clearState() {
        setCredentials({ fullname: '', username: '', password: '', imgUrl: '' })
        setIsSignup(false)
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    async function onLogin(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username) return
        try {
            await handleLogin(credentials)
            clearState()
            if (userService.getLoggedinUser()) {
                navigate('/workspace')
            } else {
                console.log('not logged in')
            }
        } catch (err) {
            console.log("user not found ", err);
        }
    }

    function onSignup(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username ||
            !credentials.password ||
            !credentials.fullname
        ) return
        handleSignup(credentials)
        clearState()
        if (userService.getLoggedinUser()) {
            navigate('/workspace')
        } else {
            console.log('not logged in')
        }
    }

    async function handleSignup(credentials) {
        try {
            const user = await signup(credentials)
            showSuccessMsg(`Welcome new user: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot signup')
        }
    }

    async function handleLogin() {
        try {
            const user = await login(credentials)
            showSuccessMsg(`Welcome: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot login')
        }
    }

    function toggleSignup() {
        setIsSignup(!isSignup)
    }

    function onUploaded(imgUrl) {
        setCredentials({ ...credentials, imgUrl })
    }

    function onGoHome() {
        navigate('/')
    }

    return (
        <div className="login-page">
            <div className="login-page-header"></div>
            <h3 onClick={onGoHome}>Trellax</h3>
            <div className="login-signin-container">
                {!isSignup && (
                    <div className="login-container">
                        <h3>Log in to Trellax</h3>
                        <form>
                            <input
                                type="text"
                                name="username"
                                placeholder=" Enter username"
                                onChange={handleChange}
                                required
                                autoFocus
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                onChange={handleChange}
                                required
                            />
                            <button onClick={onLogin} className="login-btn">
                                Log in to Trellax
                            </button>
                        </form>
                        <h3>OR</h3>
                    </div>
                )}

                {isSignup && (
                    <div className="signin-container">
                        <h3>Sign up for your account</h3>
                        <form onSubmit={onSignup}>
                            <input
                                type="text"
                                name="fullname"
                                placeholder=" Enter full name"
                                onChange={handleChange}
                                required
                                autoFocus
                            />
                            <input
                                type="text"
                                name="username"
                                placeholder=" Enter username"
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                onChange={handleChange}
                                required
                            />
                            <button className="login-btn">
                                Sign up for your account
                            </button>
                        </form>
                        <h3>OR</h3>
                    </div>
                )}
                <button className="login-with-btn">
                    <GoogleLogo className="btn-logo" />
                    Continue with Google
                </button>
                <button className="login-with-btn">
                    <MicrosoftLogo className="btn-logo" />
                    Continue with Microsoft
                </button>
                <button className="login-with-btn">
                    <AppleLogo className="btn-logo" />
                    Continue with Apple
                </button>
                <button className="login-with-btn">
                    <SlackLogo className="btn-logo" />
                    Continue with Slack
                </button>
                <hr></hr>
                {!isSignup && (
                    <h4 onClick={toggleSignup}>Sign up for an account</h4>
                )}
                {isSignup && (
                    <h4 onClick={toggleSignup}>
                        Already have an account? Log in
                    </h4>
                )}
            </div>
            <LeftImg className="left-img" />
            <RightImg className="right-img" />
        </div>
    )
}
