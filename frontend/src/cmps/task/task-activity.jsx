import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { utilService } from 'services/util.service'
import Guest from '../../assets/img/guest.png'
import { loadUser, loadUsers } from 'store/user.actions'

export function TaskActivity({ taskId, isShowAll }) {
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [activityList, setActivityList] = useState([])
    const [users, setUsers] = useState([])

    async function handleLoadUsers() {
        const usersFromDb = await loadUsers()
        setUsers(usersFromDb)
    }

    function capitalizeKeywords(str) {
        const pattern = /(ongoing|done)/gi
        return str.replace(
            pattern,
            (match) =>
                match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()
        )
    }

    useEffect(() => {
        handleLoadUsers()
        const activities = board.activities
        const sortedActivities = activities
            .filter((activity) => activity?.taskId === taskId)
            .sort((a, b) => b.createdAt - a.createdAt)
            .slice(0, isShowAll ? 5 : board.activities.length - 1)

        setActivityList(sortedActivities)

    }, [board, taskId, isShowAll])

    function getMemberImgUrl(memberId) {
        const user = users.find(user => user._id === memberId)
        if (user) {
            return user.imgUrl;
        }
        else return Guest

    }

    return (
        <div className="task-activities-container">
            {activityList.map((activity) =>
                activity ? (
                    <div className="activity-container" key={activity.id}>
                        <img
                            className="activity-icon"
                            src={getMemberImgUrl(activity.memberId)}
                            alt=""
                        />
                        <div className="activity-wrapper">
                            {' '}
                            <div className="activity-content">
                                <span className="title">
                                    <span className="by">{activity.by} </span>
                                    {activity.titleInTask
                                        ? capitalizeKeywords(
                                            activity.titleInTask.toLowerCase()
                                        )
                                        : capitalizeKeywords(
                                            activity.title.toLowerCase()
                                        )}
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
