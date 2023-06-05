import { useNavigate } from 'react-router-dom'
import { HomepageHeader } from '../cmps/homepage-header'
import homepageImg from '../assets/img/homepageImg.png'

export function HomePage() {
    const navigate = useNavigate()
    function handleclick() {
        navigate('/workspace')
    }
    return (
        <div className="homepage-container">
            <HomepageHeader handleclick={handleclick} />
            <section className="homepage-gradiant">
                <div className="homepage-content">
                    <div className="content-left">
                        <h1>
                            Trellax brings all your tasks, teammates, and tools
                            together
                        </h1>
                        <p>
                            Keep everything in the same place, even if your team
                            isn’t.
                        </p>
                        <button onClick={handleclick}>Try demo!</button>
                    </div>
                    <div className="content-right">
                        <img src={homepageImg} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}
