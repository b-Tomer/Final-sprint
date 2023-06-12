import { useNavigate } from 'react-router-dom'
import { HomepageHeader } from '../cmps/homepage-header'
import homepageImg from '../assets/img/homepageImg.png'
import { HomeageCarousel } from 'cmps/homepage-carousel'
import { MainFooter } from 'cmps/main-footer'

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
            <section className="bottom">
                <div className="TRELLAX-intro">
                    <p className="TRELLAX-101">TRELLAX - 101</p>
                    <h2 className="powerhouse">A productivity powerhouse</h2>
                    <p className="TRELLAX-desc">
                        Simple, flexible, and powerful. All it takes are boards,
                        lists, and cards to get a clear view of who’s doing what
                        and what needs to get done. Learn more in our guide for
                        getting started.
                    </p>
                </div>
                <HomeageCarousel />
            </section>
            <MainFooter />
        </div>
    )
}
