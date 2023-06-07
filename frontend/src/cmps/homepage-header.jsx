import { ReactComponent as Down } from '../assets/img/icons/down.svg'
import { useNavigate } from 'react-router-dom'

export function HomepageHeader({ handleclick }) {
    const navigate = useNavigate()
    function goToLogin() {
        navigate('/loginSignup')
    }

    return (
        <div className="homepage-header-container">
            <div className="homepage-header-logo">
                <h1 className="logo-title">Trellax</h1>
            </div>
            <nav className="homepage-header-nav">
                <button className="homepage-header-btn">
                    <span>Features</span>
                    <Down className="homepage-header-icon" />
                </button>
                <button className="homepage-header-btn">
                    <span>Solutions</span>
                    <Down className="homepage-header-icon" />
                </button>
                <button className="homepage-header-btn">
                    <span>Plans</span>
                    <Down className="homepage-header-icon" />
                </button>
                <button className="homepage-header-btn">
                    <span>Pricing</span>
                    <Down className="homepage-header-icon" />
                </button>
                <button className="homepage-header-btn">
                    <span>Resources</span>
                    <Down className="homepage-header-icon" />
                </button>
            </nav>
            <nav className="homepage-header-actions">
                <button onClick={goToLogin} className="homepage-header-btn">
                    Log in
                </button>
                <button
                    onClick={handleclick}
                    className="homepage-header-btn try"
                >
                    Try demo!
                </button>
            </nav>
        </div>
    )
}
