import { useState, useEffect } from 'react'
import { userService } from '../services/user.service'
import { ImgUploader } from '../cmps/img-uploader'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'

export function LoginSignup() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        fullname: '',
    })
    const [isSignup, setIsSignup] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
        console.log(users)
    }, [])

    async function loadUsers() {
        const users = await userService.getUsers()
        setUsers(users)
    }

    function clearState() {
        setCredentials({ username: '', password: '', fullname: '', imgUrl: '' })
        setIsSignup(false)
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    function onLogin(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username) return
        handleLogin(credentials)
        clearState()
    }

    function onSignup(ev = null) {
        if (ev) ev.preventDefault()
        if (
            !credentials.username ||
            !credentials.password ||
            !credentials.fullname
        )
            return
        handleSignup(credentials)
        clearState()
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

    return (
        <div className="login-page">
            <img src="" alt="" className="logo" />s
            <p>
                <button className="btn-link" onClick={toggleSignup}>
                    {!isSignup ? 'Signup' : 'Login'}
                </button>
            </p>
            {!isSignup && (
                <form className="login-form" onSubmit={onLogin}>
                    <select
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    >
                        <option value="">Select User</option>
                        {users.length &&
                            users.map((user) => (
                                <option key={user._id} value={user.username}>
                                    {user.fullname}
                                </option>
                            ))}
                    </select>
                    {/* <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Username"
                        onChange={handleChange}
                        required
                        autoFocus
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    /> */}
                    <button>Login!</button>
                </form>
            )}
            <div className="signup-section">
                {isSignup && (
                    <form className="signup-form" onSubmit={onSignup}>
                        <input
                            type="text"
                            name="fullname"
                            value={credentials.fullname}
                            placeholder="Fullname"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="username"
                            value={credentials.username}
                            placeholder="Username"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />
                        <ImgUploader onUploaded={onUploaded} />
                        <button>Signup!</button>
                    </form>
                )}
            </div>
        </div>
    )
}
