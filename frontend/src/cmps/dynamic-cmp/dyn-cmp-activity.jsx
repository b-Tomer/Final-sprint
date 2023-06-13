import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { utilService } from 'services/util.service'
import Guest from '../../assets/img/guest.png'
import { loadUser } from 'store/user.actions'

export function DynCmpActivities({ board }) {
    const [activityList, setActivityList] = useState([])

    useEffect(() => {
        async function fetchActivities() {
            if (board && board.activities && board.activities.length > 0) {
                const updatedActivities = await Promise.all(
                    board.activities.map(async (activity) => {
                        const memberImgUrl = await getMemberImg(
                            activity.memberId
                        )
                        return { ...activity, memberImgUrl }
                    })
                )
                const sortedActivities = updatedActivities.sort(
                    (a, b) => b.createdAt - a.createdAt
                )
                setActivityList(sortedActivities)
            }
        }
        fetchActivities()
    }, [board])

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
        <div className="task-activities-container">
            {activityList.map((activity) =>
                activity ? (
                    <div className="activity-container" key={activity.id}>
                        <img
                            className="activity-icon"
                            src={activity.memberImgUrl}
                            alt=""
                        />
                        <div>
                            {' '}
                            <div className="activity-content">
                                <span className="title">
                                    <span className="by">{activity.by} </span>
                                    {activity.title?.toLowerCase()}
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
        </div>
    )
}
