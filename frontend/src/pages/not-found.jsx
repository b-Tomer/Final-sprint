import { HomepageHeader } from '../cmps/homepage-header'
import { useNavigate } from 'react-router-dom'

export function NotFound() {
    const navigate = useNavigate()
    function handleClickDemo() {
        navigate('/workspace')
    }

    function handleClickHome() {
        navigate('/')
    }

    return (
        <div className="notfound-container">
            <HomepageHeader handleclick={handleClickDemo} />
            <div
                className="shadow"
                style={{ boxShadow: '0px 7px 14px 0px #00000014' }}
            ></div>
            <div className="notfound-content">
                <h1>Page not found.</h1>
                <p>
                    This page may be private. click{' '}
                    <span onClick={handleClickHome}>here</span> to go back to
                    homepage
                </p>
            </div>
        </div>
    )
}
