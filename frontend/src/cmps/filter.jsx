import { useSelector } from 'react-redux'
import { ReactComponent as Member } from '../assets/img/icons/member.svg'
import { ReactComponent as Calander } from '../assets/img/icons/calander.svg'
import { ReactComponent as Clock } from '../assets/img/icons/clock.svg'
import { useRef, useState } from 'react'
import { store } from 'store/store'
import { SET_BOARD } from 'store/board.reducer'

export function Filter() {
    const { board } = useSelector((storeState) => storeState.boardModule)

    const [filterBy, setFilterBy] = useState({
        isMembers: false,
        byMembers: [],
        isDate: false,
        isOverdue: false,
        isDueSoon: false,
        byLabels: [],
    })

    const originalBoard = useRef(board)

    function onNoMembers(ev) {
        const isChecked = ev.target.checked
        setFilterBy(isChecked)
        filterBoard(isChecked)
    }

    function onToggleLabel(ev, labelId) {
        const isChecked = ev.target.checked
        setFilterBy((prevFilterBy) => {
            let updatedByLabels
            if (isChecked) {
                updatedByLabels = [...prevFilterBy.byLabels, labelId]
            } else {
                updatedByLabels = prevFilterBy.byLabels.filter(
                    (label) => label !== labelId
                )
            }
            const updatedFilterBy = {
                ...prevFilterBy,
                byLabels: updatedByLabels,
            }
            filterBoard(updatedFilterBy)
            return updatedFilterBy
        })
    }

    // function filterBoard(filterBy) {
    //     if (filterBy) {
    //         const filteredBoard = {
    //             ...originalBoard.current,
    //             groups: originalBoard.current.groups.map((group) => ({
    //                 ...group,
    //                 tasks: group.tasks.filter(
    //                     (task) =>
    //                         task.members === undefined ||
    //                         task.members.length === 0
    //                 ),
    //             })),
    //         }
    //         store.dispatch({ type: SET_BOARD, board: filteredBoard })
    //     } else {
    //         store.dispatch({ type: SET_BOARD, board: originalBoard.current })
    //     }
    // }

    function filterBoard(filterBy) {
        const { byLabels } = filterBy
        if (byLabels.length > 0) {
            const filteredBoard = {
                ...originalBoard.current,
                groups: originalBoard.current.groups.map((group) => ({
                    ...group,
                    tasks: group.tasks.filter((task) => {
                        return (
                            task.labelIds &&
                            task.labelIds.some((label) =>
                                byLabels.includes(label)
                            )
                        )
                    }),
                })),
            }
            store.dispatch({ type: SET_BOARD, board: filteredBoard })
        } else {
            store.dispatch({ type: SET_BOARD, board: originalBoard.current })
        }
    }

    return (
        <div className="filter-container">
            <h3>Keyword</h3>
            <input
                type="text"
                id="search-input"
                placeholder="Enter a keyword"
                className="filter-search-bar"
            ></input>
            <h4>Search cards, members, labels, and more.</h4>
            <h3>Members</h3>
            <div className="filter-members-section">
                <label
                    // onClick={onCheckClick}
                    className="filter-member"
                    htmlror="checkbox"
                >
                    <input
                        type="checkbox"
                        name="checkbox"
                        // onClick={onCheckClick}
                        // checked={isMemberChecked}
                        onChange={onNoMembers}
                        className="checkbox"
                    />
                    <div className="filter-icon-frame">
                        <Member className="filter-icon" />
                    </div>
                    <span className="member-name">No members</span>
                </label>

                {board.members &&
                    board.members.length > 0 &&
                    board.members.map((member) => {
                        return (
                            <label
                                key={member._id}
                                // onClick={onCheckClick}
                                className="filter-member"
                                htmlror="checkbox"
                            >
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    // onClick={onCheckClick}
                                    // checked={isMemberChecked}
                                    // onChange={(ev) =>
                                    //     onToggleCheckedMember(ev, member._id)
                                    // }
                                    className="checkbox"
                                />
                                <div className="filter-icon-frame">
                                    <img
                                        src={member.imgUrl}
                                        alt="Image"
                                        className="filter-icon"
                                    />
                                </div>
                                <span className="member-name">
                                    {member.fullname}
                                </span>
                            </label>
                        )
                    })}
            </div>
            <div className="filter-dates-section">
                <h3>Due date</h3>
                <label className="filter-dates">
                    <input
                        type="checkbox"
                        name="checkbox"
                        // onClick={onCheckClick}
                        // checked={isMemberChecked}
                        // onChange={(ev) =>
                        //     onToggleCheckedMember(ev, member._id)
                        // }
                        className="checkbox"
                    />
                    <div className="filter-icon-frame">
                        <Calander className="filter-icon" />
                    </div>
                    <span className="member-name">No dates</span>
                </label>
                <label className="filter-dates" htmlror="checkbox">
                    <input
                        type="checkbox"
                        name="checkbox"
                        className="checkbox"
                    // onClick={onCheckClick}
                    // checked={isMemberChecked}
                    // onChange={(ev) =>
                    //     onToggleCheckedMember(ev, member._id)
                    // }
                    />
                    <div className="filter-icon-frame red">
                        <Clock className="filter-icon" />
                    </div>
                    <span className="member-name">Overdue</span>
                </label>
                <label className="filter-dates" htmlror="checkbox">
                    <input
                        type="checkbox"
                        name="checkbox"
                        // onClick={onCheckClick}
                        // checked={isMemberChecked}
                        // onChange={(ev) =>
                        //     onToggleCheckedMember(ev, member._id)
                        // }
                        className="checkbox"
                    />
                    <div className="filter-icon-frame yellow">
                        <Clock className="filter-icon" />
                    </div>
                    <span className="member-name">Due in the next day</span>
                </label>
            </div>

            <div className="filter-labels-section">
                <h3>Labels</h3>
                {board.labels.map((label) => {
                    return (
                        <label
                            key={label.id}
                            // onClick={onCheckClick}
                            className="filter-labels"
                        >
                            <input
                                id={`checkbox-${label.id}`}
                                type="checkbox"
                                name="checkbox"
                                // checked={isLabelChecked}
                                // onClick={onCheckClick}
                                onChange={(ev) => onToggleLabel(ev, label.id)}
                                className="checkbox"
                            />
                            <div
                                className="filter-label-title"
                                style={{ backgroundColor: label.color }}
                            >
                                <span> {label.title}</span>
                            </div>
                        </label>
                    )
                })}
            </div>
        </div>
    )
}
