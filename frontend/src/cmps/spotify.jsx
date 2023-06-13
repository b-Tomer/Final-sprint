import { useState } from "react"
import { ReactComponent as Play } from '../assets/img/icons/play.svg'


export function Spotify() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isPlayerPlaying, setIsPlayerPlaying] = useState(false)

    function onToggleSpotify() {
        setIsMenuOpen(!isMenuOpen)
        setIsPlayerPlaying(true)
    }

    return (
        <div onClick={onToggleSpotify} className={`side-spotify ${isMenuOpen ? 'open-spotify' : ''}`}>
            <button
                onClick={onToggleSpotify}
                className={`open-spotify-btn ${isPlayerPlaying ? 'heartbeat-animation' : ''}`}>
                <Play className="play-icon" /></button>
            <iframe
                onClick={onToggleSpotify}
                className='spotify-player'
                title="Spotify Embed: Recommendation Playlist "
                src={`https://open.spotify.com/embed/playlist/6kOVbGuByjJPcyiEs5MGst?utm_source=generator&theme=0`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                />
        </div>
    )
}