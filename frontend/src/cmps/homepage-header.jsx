import { useState } from 'react'
import { ReactComponent as Down } from '../assets/img/icons/down.svg'
import { useNavigate } from 'react-router-dom'

export function HomepageHeader({ handleclick }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()

    function goToLogin() {
        navigate('/loginSignup')
    }

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="homepage-header-container">
            <div className="homepage-header-logo">
                <h1 className="logo-title">Trellax</h1>
            </div>
            <nav className={`homepage-header-nav ${isMenuOpen ? 'open-homepage-menu' : ''}`}>
                <button className="homepage-header-btn">
                    <span>Features</span>
                    <div className='svg-homepage-arrow'>
                        <Down className="homepage-header-icon" />
                    </div>
                </button>
                <button className="homepage-header-btn">
                    <span>Solutions</span>
                    <div className='svg-homepage-arrow'>
                        <Down className="homepage-header-icon" />
                    </div>
                </button>
                <button className="homepage-header-btn">
                    <span>Pricing</span>
                    <div className='svg-homepage-arrow'>
                        <Down className="homepage-header-icon" />
                    </div>
                </button>
                <button className="homepage-header-btn">
                    <span>Resources</span>
                    <div className='svg-homepage-arrow'>
                        <Down className="homepage-header-icon" />
                    </div>
                </button>
                <nav className="homepage-header-actions">
                    <button onClick={goToLogin} className="btn-header-login">
                        Log in
                    </button>
                    <button
                        onClick={handleclick}
                        className="btn-header-actions try"
                    >
                        Try demo!
                    </button>
                </nav>
            </nav>
            <button className="menu-button" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
            </button>
        </div>
    )
}
