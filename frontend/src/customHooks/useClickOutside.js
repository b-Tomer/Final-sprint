import { useEffect } from 'react'

export const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
        // console.log(e.target)
        // console.log(ref.current)
        if (ref.current && !ref.current.contains(e.target)) {
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    })
}
