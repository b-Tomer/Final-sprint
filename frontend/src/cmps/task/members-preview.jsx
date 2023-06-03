
export const MembersPreview = ({ task }) => {
  if (!task.members || !task.members.length) return

  return (
    <div className="member-data">
      <h3 className="data-preview-title">Members</h3>
      <div className="members">
        {task.members.map(member =>
          <div key={member._id} style={{ background: `url(${member?.imgUrl}) center center / cover ` }} className="members-preview user-img">
          </div>
        )}
        <span>+</span>
      </div>
    </div>
  )
}
