import { useState, useEffect } from 'react'
import BasicTimePicker from '../task/basic-time-keeper'
import { boardService } from 'services/board.service.local'
import { userService } from 'services/user.service'
import { loadUser } from 'store/user.actions'

export function DynCmpMemberPreview({ currMember }) {
    const [mail, setMail] = useState(null)

    useEffect(() => {
        if (currMember) {
            getMemberMail()
        }
    }, [currMember])

    function upperCase(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
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
                <div className="user-info-header">
                    <div className="user-info-name">
                        {upperCase(currMember.fullname)}
                    </div>
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
