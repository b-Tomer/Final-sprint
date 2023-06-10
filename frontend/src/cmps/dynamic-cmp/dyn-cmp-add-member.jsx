import { useEffect } from 'react'
import { useState } from 'react'
import { loadUsers } from 'store/user.actions'
import { useSelector } from 'react-redux'
import { updateBoard } from 'store/board.actions'
import { boardService } from 'services/board.service.local'
import { userService } from 'services/user.service'

export function DynCmpAddMember({}) {
    const [allUsers, setAllUsers] = useState([])
    const { board } = useSelector((storeState) => storeState.boardModule)

    useEffect(() => {
        onLoadUsers()
    }, [])

    async function onLoadUsers() {
        const usersFromdb = await loadUsers()
        setAllUsers(usersFromdb)
        console.log(board)
    }

    async function onToggleCheckedMember(ev, memberId, user) {
        ev.stopPropagation()
        const activity = boardService.getEmptyActivity()
        activity.by = userService.getLoggedinUser()?.fullname
            ? userService.getLoggedinUser().fullname
            : 'Guest'
        if (!board.members) {
            board.members = [memberId]
        } else {
            if (isBoardMember(user)) {
                console.log('bla')
                const memberIndex = board.members.indexOf(memberId)
                board.members.splice(memberIndex, 1)
                activity.title = `Removed member: "${user.fullname}" from board: ${board.title}`
            } else {
                console.log('blo')

                board.members.push(user)
                activity.title = `Added member: "${user.fullname}" to board: ${board.title}`
            }
        }
        try {
            console.log(board.members)
            board.activities.push(activity)
            await updateBoard(board)
        } catch (error) {
            console.log(error)
        }
    }

    // function getMemberName(memberId) {
    //     const member = board.members.find(
    //         (currMember) => currMember._id === memberId
    //     )
    //     return member.fullname
    // }

    function isBoardMember(member) {
        return board.members.some((currMember) => currMember._id === member._id)
    }

    return (
        <div className="add-members-container">
            <input
                className="search-members"
                type="text"
                placeholder="search members"
            />
            {allUsers.length > 0 && (
                <ul className="all-users">
                    {allUsers.map((user) => (
                        <li key={user._id} className="user">
                            <img src={user.imgUrl} alt="" />
                            {user.fullname}
                            <input
                                type="checkbox"
                                name="checkbox"
                                checked={isBoardMember(user)}
                                onChange={(ev) =>
                                    onToggleCheckedMember(ev, user._id, user)
                                }
                                className="user-checkbox"
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
