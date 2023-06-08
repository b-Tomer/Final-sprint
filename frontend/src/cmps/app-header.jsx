import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addBoard } from '../store/board.actions.js'
import { useState, useEffect } from 'react'
import { FastAverageColor } from 'fast-average-color'
import ContrastColor from 'contrast-color'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Down } from '../assets/img/icons/down.svg'
import { ReactComponent as Notifications } from '../assets/img/icons/notifications.svg'
import { ReactComponent as Info } from '../assets/img/icons/info.svg'
import { ReactComponent as Theme } from '../assets/img/icons/theme.svg'
import { ReactComponent as Search } from '../assets/img/icons/search.svg'
import { ReactComponent as Logo } from '../assets/img/icons/logo.svg'
import { boardService } from '../services/board.service.local.js'

export function AppHeader({ onSetfilter }) {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    const toggleMobileOpen = () => {
        setIsMobileOpen(!isMobileOpen)
    }

    const navigate = useNavigate()
    const [bgColor, setBgColor] = useState(null)
    const [txtColor, setTxtColor] = useState(null)

    const fac = new FastAverageColor()

    useEffect(() => {
        printAverageColor()
    }, [board])

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
            <Logo className="logo-img" onClick={goHome} />
            <div className="app-logo" onClick={goHome}>
                <h3>Trellax</h3>
            </div>
            <nav className="main-nav">
                <div
                    className={`links-section ${
                        isMobileOpen ? 'mobile-open' : ''
                    }`}
                >
                    <div className="link-section">
                        <div className="links">
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
                                Workspaces
                            </NavLink>
                        </div>
                        <Down className="down-img" src={Down} alt="" />
                    </div>
                    <div className="link-section">
                        <div className="links">
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
                            </NavLink>
                        </div>
                        <Down className="down-img" src={Down} alt="" />
                    </div>
                    <div className="link-section">
                        <div className="links">
                            <NavLink
                                to="/bookApp"
                                style={
                                    bgColor
                                        ? txtColor
                                            ? { color: txtColor }
                                            : null
                                        : null
                                }
                            >
                                Starred
                            </NavLink>
                        </div>
                        <Down className="down-img" src={Down} alt="" />
                    </div>
                </div>
                <div className="nav-btns">
                    <button
                        onClick={toggleMobileOpen}
                        className="more"
                        style={
                            bgColor
                                ? txtColor
                                    ? { color: txtColor }
                                    : null
                                : null
                        }
                    >
                        More <Down className="down-img" src={Down} alt="" />
                    </button>
                    <button
                        className="new-board"
                        onClick={onNewBoard}
                        style={
                            bgColor
                                ? txtColor
                                    ? { color: txtColor }
                                    : null
                                : null
                        }
                    >
                        <span className="plus-icon">+</span>
                        <span className="create">Create</span>
                    </button>
                </div>
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
                <ul className="header-icons">
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
