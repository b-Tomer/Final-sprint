import { ReactComponent as Logo } from '../assets/img/hompageLogo.svg'
import { ReactComponent as Down } from '../assets/img/icons/down.svg'

export function HomepageHeader({ handleclick }) {
    return (
        <div className="homepage-header-container">
            <div className="homepage-header-logo">
                <Logo />
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
                <button className="homepage-header-btn">Log in</button>
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
