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
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        onLoadUsers()
    }, [])

    useEffect(() => {
        filterUsers()
    }, [searchTerm])

    async function onLoadUsers() {
        const usersFromdb = await loadUsers()
        setAllUsers(usersFromdb)
    }

    async function onToggleCheckedMember(ev, memberId, user) {
        ev.stopPropagation()
        const activity = boardService.getEmptyActivity()
        activity.memberId = userService.getLoggedinUser()?._id
            ? userService.getLoggedinUser()._id
            : null
        activity.by = userService.getLoggedinUser()?.fullname
            ? userService.getLoggedinUser().fullname
            : 'Guest'
        if (!board.members) {
            board.members = [memberId]
        } else {
            if (isBoardMember(user)) {
                const memberIndex = board.members.indexOf(memberId)
                board.members.splice(memberIndex, 1)
                activity.title = `Removed member: "${user.fullname}" from board: ${board.title}`
            } else {
                board.members.push(user)
                activity.title = `Added member: "${user.fullname}" to board: ${board.title}`
            }
        }
        try {
            if (activity) board.activities.push(activity)
            await updateBoard(board)
        } catch (error) {
            console.log(error)
        }
    }

    function isBoardMember(member) {
        return board.members.some((currMember) => currMember._id === member._id)
    }

    function handleSearchChange(event) {
        const { value } = event.target
        setSearchTerm(value)
    }

    function filterUsers() {
        const regex = new RegExp(searchTerm, 'i')
        const filteredUsers = allUsers.filter(
            (user) => regex.test(user.fullname) || regex.test(user.mail)
        )
        setFilteredUsers(filteredUsers)
    }

    return (
        <div className="add-members-container">
            <input
                className="search-members"
                type="text"
                placeholder="Search members"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {allUsers.length === 0 ? (
                <p>Loading users...</p>
            ) : (
                <ul className="all-users">
                    {filteredUsers.length > 0
                        ? filteredUsers.map((user) => (
                              <li key={user._id} className="user">
                                  <img src={user.imgUrl} alt="" />
                                  <div className="details">
                                      <span className="fullname">
                                          {user.fullname}
                                      </span>
                                      <span className="mail">{user.mail}</span>
                                  </div>
                                  <input
                                      type="checkbox"
                                      name="checkbox"
                                      checked={isBoardMember(user)}
                                      onChange={(ev) =>
                                          onToggleCheckedMember(
                                              ev,
                                              user._id,
                                              user
                                          )
                                      }
                                      className="user-checkbox"
                                  />
                              </li>
                          ))
                        : allUsers.map((user) => (
                              <li key={user._id} className="user">
                                  <img src={user.imgUrl} alt="" />
                                  <div className="details">
                                      <span className="fullname">
                                          {user.fullname}
                                      </span>
                                      <span className="mail">{user.mail}</span>
                                  </div>
                                  <input
                                      type="checkbox"
                                      name="checkbox"
                                      checked={isBoardMember(user)}
                                      onChange={(ev) =>
                                          onToggleCheckedMember(
                                              ev,
                                              user._id,
                                              user
                                          )
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
