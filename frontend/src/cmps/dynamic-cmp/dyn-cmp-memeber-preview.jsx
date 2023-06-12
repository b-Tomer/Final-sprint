import { useState, useEffect } from 'react'
import BasicTimePicker from '../task/basic-time-keeper'
import { boardService } from 'services/board.service.local'
import { userService } from 'services/user.service'
import { loadUser } from 'store/user.actions'
import { FastAverageColor } from 'fast-average-color'
import ContrastColor from 'contrast-color'



export function DynCmpMemberPreview({ currMember }) {
    const [mail, setMail] = useState(null)
    const [bgColor, setBgColor] = useState(null)
    const [txtColor, setTxtColor] = useState(null)



    useEffect(() => {
        if (currMember) {
            getMemberMail()
            printAverageColor()
        }
    }, [currMember])

    const fac = new FastAverageColor()

    function printAverageColor() {
        console.log('gtt')
        const img = document.createElement('img')
        img.crossOrigin = 'anonymous'
        if (!currMember) return
        if (!currMember.imgUrl) return
        img.src = currMember.imgUrl
        console.log(currMember.imgUrl)
        img.addEventListener('load', () => {
            const averageColor = fac.getColor(img).hex
            console.log(averageColor)
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




    async function getMemberMail() {
        try {
            setMail('')
            const user = await loadUser(currMember._id)
            setMail(user.mail)
        } catch (error) {
            console.log(error)
            setMail('no mail avilable')
        }
    }

    return (
        <div className="member-prev-container">
            {currMember && (
                <div className="user-info-header"
                    style={
                        bgColor
                            ? txtColor
                                ? { backgroundColor: bgColor, color: txtColor }
                                : { backgroundColor: bgColor }
                            : null
                    }>
                    <div className="user-info-name">{currMember.fullname}</div>
                    <div className="user-mail">{mail}</div>
                    {currMember.imgUrl && (
                        <img
                            className="user-photo"
                            id="image"
                            src={`${currMember.imgUrl}`}
                            alt="Image"
                        ></img>
                    )}
                </div>
            )}
        </div>
    )
}
