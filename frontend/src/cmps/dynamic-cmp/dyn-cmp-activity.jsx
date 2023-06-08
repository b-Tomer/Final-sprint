import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { utilService } from 'services/util.service'

export function DynCmpActivities({ board }) {
    console.log(board)
    // const { board } = useSelector((storeState) => storeState.boardModule)
    console.log(board)
    return (
        <div className="activities-container">
            {board &&
                board.activities &&
                board.activities.length &&
                board.activities.map((activity) => (
                    <div className="activity-container" key={activity.id}>
                        <span className="title">{activity.title}</span>
                        <span className="created-at">
                            At:{' '}
                            {utilService.formatTimestamp(activity.createdAt)}
                        </span>
                    </div>
                ))}
        </div>
    )
}
