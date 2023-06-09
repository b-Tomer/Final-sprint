import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { utilService } from 'services/util.service'

export function DynCmpActivities({ board }) {
    function checkActivity(activity) {
        if (!activity) return false
        else return true
    }

    return (
        <div className="activities-container">
            {board &&
                board.activities &&
                board.activities.length > 0 &&
                board.activities.map(
                    (activity) =>
                        activity && (
                            <div
                                className="activity-container"
                                key={activity.id}
                            >
                                <span className="title">{activity.title}</span>
                                <span className="created-at">
                                    At:{' '}
                                    {utilService.formatTimestamp(
                                        activity.createdAt
                                    )}
                                </span>
                            </div>
                        )
                )}
        </div>
    )
}
