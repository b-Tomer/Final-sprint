import { useSelector } from 'react-redux'
import { updateTask } from '../../store/task.actions';

export function DynCmpMembers({ task }) {

    const { board } = useSelector((storeState) => storeState.boardModule)

    function findGroupIdByTaskId(board, taskId) {
        if (!Array.isArray(board.groups)) {
            return null
        }
        for (const group of board.groups) {
            if (!Array.isArray(group.tasks)) {
                continue
            }
            const foundTask = group.tasks.find(task => task.id === taskId)
            if (foundTask) {
                return group.id
            }
        }
        return null
    }

    function onToggleCheckedMember(ev, memberId) {
        ev.stopPropagation()
        if (!task.members) {
            task.members = [memberId]
        }
        else {
            if (task.members.includes(memberId)) {
                const memberIndex = task.members.indexOf(memberId);
                task.members.splice(memberIndex, 1);
            } else task.members.push(memberId)
        }
        updateTask(board._id, findGroupIdByTaskId(board, task.id), task)
    }

    function onCheckClick(ev) {
        ev.stopPropagation()
    }

    if (!task) return null
    return (
        <div className='dyn-cmp-members-container'>
            <h3>Board members</h3>
            <div  >
                {board.members.map(member => {
                    const isMemberChecked = task.members ? task.members.includes(member._id) : false;
                    return (
                        <label key={member._id} onClick={onCheckClick} className='dyn-cmp-member' htmlror="checkbox" >
                            <div>
                                <img src={member.imgUrl} alt="Image" className='member-img' />
                            </div>
                            <span>{member.fullname}</span>
                            <input
                                id={`checkbox-${member._id}`}
                                type="checkbox"
                                name="checkbox"
                                onClick={onCheckClick}
                                checked={isMemberChecked}
                                onChange={(ev) => onToggleCheckedMember(ev, member._id)}
                                className="checkbox" />
                        </label>
                    )
                })}
            </div>
        </div>
    )

}
















