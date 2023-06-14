import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { utilService } from 'services/util.service'
import Guest from '../../assets/img/guest.png'
import { loadUser, loadUsers } from 'store/user.actions'

export function DynCmpActivities({ }) {
    const { board } = useSelector((storeState) => storeState.boardModule)

    const [activityList, setActivityList] = useState([])
    const [users, setUsers] = useState([])

    async function hansleLoadUsers() {
        const usersFromDb = await loadUsers()
        setUsers(usersFromDb)
    }

    useEffect(() => {
        hansleLoadUsers()
        const activities = board.activities
        const sortedActivities = activities.sort(
            (a, b) => b.createdAt - a.createdAt
        )
        setActivityList(sortedActivities)
    }, [])

    function getMemberImgUrl(memberId) {
        const user = users.find(user => user._id === memberId)
        if (user) {
            return user.imgUrl;
        }
        else return Guest

    }


    async function getMemberImg(memberId) {
        if (!memberId) {
            return Guest
        } else {
            try {
                const user = await loadUser(memberId)
                return user.imgUrl
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <>
            {users && users.length > 0 && <div className="task-activities-container">
                {activityList.map((activity) =>
                    activity ? (
                        <div className="activity-container" key={activity.id}>
                            <img
                                className="activity-icon"
                                src={getMemberImgUrl(activity.memberId)}
                                alt=""
                            />
                            <div>
                                {' '}
                                <div className="activity-content">
                                    <span className="title">
                                        <span className="by">{activity.by} </span>
                                        {activity.title.toLowerCase()}
                                    </span>
                                </div>
                                <span className="created-at">
                                    {utilService.formatTimestamp(
                                        activity.createdAt
                                    )}
                                </span>
                            </div>
                        </div>
                    ) : null
                )}
            </div>}
        </>
    )
}
