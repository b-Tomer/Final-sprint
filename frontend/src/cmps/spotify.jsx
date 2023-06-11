import { useState } from "react"

export function Spotify() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function onToggleSpotify() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <aside className={`side-spotify ${isMenuOpen ? 'open-spotify' : ''}`}>
            <button onClick={onToggleSpotify} className='open-spotify-btn'><i className="fa-brands fa-spotify" style={{ color: "#3db355" }}></i></button>
            <iframe
                className='spotify-player'
                title="Spotify Embed: Recommendation Playlist "
                src={`https://open.spotify.com/embed/playlist/6kOVbGuByjJPcyiEs5MGst?utm_source=generator&theme=0`}
                width="100%"
                height="100%"
                style={{ height: '100%' }}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </aside>
    )
}