

export function Filter({ board }) {




    return (
        <div className="filter-container">
            <h3>Keyword</h3>
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
                    <div>
                        <img
                            // src={member.imgUrl}
                            alt="Image"
                            className="member-img"
                        />
                    </div>
                    <span></span>
                </label>

            </div>


            <h3>Due date</h3>
            <h3>Labels</h3>

        </div>
    )
}