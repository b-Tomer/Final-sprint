import { useSelector } from 'react-redux'
import { updateTask } from '../../store/task.actions'
import { boardService } from 'services/board.service.local'
import { userService } from 'services/user.service'

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
            const foundTask = group.tasks.find((task) => task.id === taskId)
            if (foundTask) {
                return group.id
            }
        }
        return null
    }

    function onToggleCheckedMember(ev, memberId) {
        ev.stopPropagation()
        const activity = boardService.getEmptyActivity()
        activity.memberId = userService.getLoggedinUser()?._id
            ? userService.getLoggedinUser()._id
            : null
        activity.taskId = task.id
        activity.by = userService.getLoggedinUser()?.fullname
            ? userService.getLoggedinUser().fullname
            : 'Guest'
        if (!task.members) {
            task.members = [memberId]
        } else {
            if (task.members.includes(memberId)) {
                const memberIndex = task.members.indexOf(memberId)
                task.members.splice(memberIndex, 1)
                activity.title = `Removed member "${getMemberName(
                    memberId
                )}" from task ${task.title}`
                activity.titleInTask = `Removed member "${getMemberName(
                    memberId
                )}"`
            } else {
                task.members.push(memberId)
                activity.title = `Added member "${getMemberName(
                    memberId
                )}" to task ${task.title}`
                activity.titleInTask = `Added member "${getMemberName(
                    memberId
                )}"`
            }
        }
        try {
            updateTask(
                board._id,
                findGroupIdByTaskId(board, task.id),
                task,
                activity
            )
        } catch (error) {
            console.log(error)
        }
    }

    function getMemberName(memberId) {
        const member = board.members.find(
            (currMember) => currMember._id === memberId
        )
        return member.fullname
    }

    function onCheckClick(ev) {
        ev.stopPropagation()
    }

    if (!task) return null
    return (
        <div className="dyn-cmp-members-container">
            <h3>Board members</h3>
            <div>
                {board.members &&
                    board.members.length > 0 &&
                    // task.members &&
                    // task.members.length > 0 &&
                    board.members.map((member) => {
                        const isMemberChecked = task.members
                            ? task.members.includes(member._id)
                            : false
                        return (
                            <label
                                key={member._id}
                                onClick={onCheckClick}
                                className="dyn-cmp-member"
                                htmlror="checkbox"
                            >
                                <div>
                                    <img
                                        src={member.imgUrl}
                                        alt="Image"
                                        className="member-img"
                                    />
                                </div>
                                <span>{member.fullname}</span>
                                <input
                                    id={`checkbox-${member._id}`}
                                    type="checkbox"
                                    name="checkbox"
                                    onClick={onCheckClick}
                                    checked={isMemberChecked}
                                    onChange={(ev) =>
                                        onToggleCheckedMember(ev, member._id)
                                    }
                                    className="checkbox"
                                />
                            </label>
                        )
                    })}
            </div>
        </div>
    )
}
