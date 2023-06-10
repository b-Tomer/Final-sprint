import { useState } from 'react'
import { useSelector } from 'react-redux'
import { utilService } from 'services/util.service'

export function TaskActivity({ taskId, isShowAll }) {
    const { board } = useSelector((storeState) => storeState.boardModule)

    function capitalizeKeywords(str) {
        const pattern = /(ongoing|done)/gi
        return str.replace(
            pattern,
            (match) =>
                match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()
        )
    }

    return (
        <div className="task-activities-container">
            {board &&
                board.activities &&
                board.activities.length > 0 &&
                board.activities
                    .filter((activity) => activity.taskId === taskId)
                    .sort((a, b) => b.createdAt - a.createdAt)
                    .slice(0, isShowAll ? 5 : board.activities.length - 1)
                    .map(
                        (activity) =>
                            activity && (
                                <div
                                    className="activity-container"
                                    key={activity.id}
                                >
                                    <div className="activity-content">
                                        <span className="by">
                                            {activity.by}{' '}
                                        </span>
                                        <span className="title">
                                            {capitalizeKeywords(
                                                activity.title.toLowerCase()
                                            )}
                                        </span>
                                    </div>
                                    <span className="created-at">
                                        At:{' '}
                                        {utilService.formatTimestamp(
                                            activity.createdAt
                                        )}
                                    </span>
                                    {/* <hr /> */}
                                </div>
                            )
                    )}
        </div>
    )
}
