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
        byMembers: [],
        byLabels: [],
        isMembers: false,
        isDate: false,
        isOverdue: false,
        isDueSoon: false,
    })

    const originalBoard = useRef(board)
    // console.log(board)



    function onToggleNoDate(ev) {
        console.log(ev.target.checked);

        const isChecked = ev.target.checked;
        setFilterBy((prevFilterBy) => ({
            ...prevFilterBy,
            isDate: isChecked,
        }));

        filterBoard({ ...filterBy, isDate: isChecked });
    }

    function onToggleNextDay(ev) {

        const isChecked = ev.target.checked;
        setFilterBy((prevFilterBy) => ({
            ...prevFilterBy,
            isDueSoon: isChecked,
        }));

        console.log(filterBy);
        filterBoard({ ...filterBy, isDueSoon: isChecked });
    }

    function onToggleOverdue(ev) {
        const isChecked = ev.target.checked;
        setFilterBy((prevFilterBy) => ({
            ...prevFilterBy,
            isOverdue: isChecked,
        }));

        filterBoard({ ...filterBy, isOverdue: isChecked });
    }

    function onToggleNoMember(ev) {

        const isChecked = ev.target.checked;
        setFilterBy((prevFilterBy) => ({
            ...prevFilterBy,
            isMembers: isChecked,
        }));

        filterBoard({ ...filterBy, isMembers: isChecked });
    }

    function onToggleMember(ev, memberId) {
        const isChecked = ev.target.checked
        setFilterBy((prevFilterBy) => {
            let updatedByMembers
            if (isChecked) {
                updatedByMembers = [...prevFilterBy.byMembers, memberId]
            } else {
                updatedByMembers = prevFilterBy.byMembers.filter(
                    (member) => member !== memberId
                )
            }
            const updatedFilterBy = {
                ...prevFilterBy,
                byMembers: updatedByMembers,
            }
            filterBoard(updatedFilterBy)
            return updatedFilterBy
        })
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


    function filterBoard(filterBy) {
        const { byLabels, byMembers, isOverdue, isDueSoon, isDate, isMembers } = filterBy;

        if (byLabels.length > 0 || byMembers.length > 0 || isOverdue || isDueSoon || isDate || isMembers) {
            const filteredBoard = {
                ...originalBoard.current,
                groups: originalBoard.current.groups.map((group) => ({
                    ...group,
                    tasks: group.tasks.filter((task) => {
                        const hasMatchingLabels = byLabels.length === 0 || task.labelIds?.some((label) => byLabels.includes(label));
                        const hasMatchingMembers = byMembers.length === 0 || task.members?.some((member) => byMembers.includes(member));
                        const hasDueDate = isDate ? task.dueDate === '' || task.dueDate === null || !task.dueDate : true;
                        const isTaskOverdue = isOverdue ? task.dueDate < Date.now() : true;
                        const isTaskDueSoon = isDueSoon ? isTaskDueSoonWithinNext24Hours(task.dueDate) : true;
                        const hasNoMembers = isMembers ? !task.members || task.members.length === 0 : true;

                        return hasMatchingLabels && hasMatchingMembers && hasDueDate && isTaskOverdue && isTaskDueSoon && hasNoMembers;
                    }),
                })),
            };

            store.dispatch({ type: SET_BOARD, board: filteredBoard });
        } else {
            store.dispatch({ type: SET_BOARD, board: originalBoard.current });
        }
    }

    function isTaskDueSoonWithinNext24Hours(dueDate) {
        const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;
        const currentDate = Date.now();
        const next24Hours = currentDate + twentyFourHoursInMilliseconds;

        return dueDate >= currentDate && dueDate <= next24Hours;
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
                        onChange={(ev) =>
                            onToggleNoMember(ev)
                        }
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
                                    onChange={(ev) =>
                                        onToggleMember(ev, member._id)
                                    }
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
                        onChange={(ev) =>
                            onToggleNoDate(ev)
                        }
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
                        onChange={(ev) =>
                            onToggleOverdue(ev)
                        }
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
                        onChange={(ev) =>
                            onToggleNextDay(ev)
                        }
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
