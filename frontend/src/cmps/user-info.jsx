import { userService } from 'services/user.service'
import { ReactComponent as X } from '../assets/img/icons/x.svg'


export function UserInfo({ closeUserInfo }) {
    const user = userService.getLoggedinUser()


    function upperCase(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
if(!user) return null
    return (
        <div >
            <div className='account'>Account</div>
            <hr></hr>
            <div className="user-info-header">
                <div className='user-photo' >
                    {user.imgUrl && <img id="image" src={`${user.imgUrl}`} alt="Image" className='user-photo' />}
                </div>

                <div className="user-info-name">{upperCase(user.fullname)}</div>
                <button className="dynamic-cmp-close" onClick={closeUserInfo}>
                    <X className="task-icon-img" />
                </button>
            </div>
            <div className='user-mail'>user email</div>
            <hr></hr>
            <div className='log-out'>Log out</div>
        </div>

    )
}





















