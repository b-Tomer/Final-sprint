import { useSelector } from 'react-redux'
import { ReactComponent as Member } from '../assets/img/icons/member.svg'
import { ReactComponent as Calander } from '../assets/img/icons/calander.svg'
import { ReactComponent as Clock } from '../assets/img/icons/clock.svg'


export function Filter() {
    const { board } = useSelector((storeState) => storeState.boardModule)
    console.log(board.members)







    return (
        <div className="filter-container">
            <h3>Keyword</h3>
            <input type="text" id="search-input" placeholder="Enter a keyword" className='filter-search-bar'></input>
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
                        // onChange={(ev) =>
                        //     onToggleCheckedMember(ev, member._id)
                        // }
                        className="checkbox"
                    />
                    <div className='filter-icon-frame'>
                        <Member className='filter-icon' />

                    </div>
                    <span className='member-name'>No members</span>
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
                                <div className='filter-icon-frame'>
                                    <img
                                        src={member.imgUrl}
                                        alt="Image"
                                        className='filter-icon'
                                    />
                                </div>
                                <span className='member-name'>{member.fullname}</span>
                            </label>
                        )
                    })}
            </div>


            <div className="filter-dates-section">
                <h3>Due date</h3>
                <label

                    className="filter-dates">
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
                    <div className='filter-icon-frame'>
                        <Calander className='filter-icon' />
                    </div>
                    <span className='member-name'>No dates</span>
                </label>
                <label
                    className="filter-dates"
                    htmlror="checkbox"
                >
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
                    <div className='filter-icon-frame red'>
                        <Clock className='filter-icon' />
                    </div>
                    <span className='member-name'>Overdue</span>
                </label>
                <label
                    className="filter-dates"
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
                    <div className='filter-icon-frame yellow'>
                        <Clock className='filter-icon' />
                    </div>
                    <span className='member-name'>Due in the next day</span>
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
                                // onChange={(ev) =>
                                //     onToggleCheckedLabel(ev, label.id)
                                // }
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