import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    loadBoards,
    addBoard,
    removeBoard,
    loadBoard,
} from '../store/board.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { groupService } from '../services/group.service.js'

export function BoardIndex() {
    // const boards = useSelector(storeState => storeState.boardModule.boards)
    const dispatch = useDispatch()
    const { boardId } = useParams()
    const { board } = useSelector((storeState) => storeState.boardModule)

    useEffect(() => {
        loadGroups()
    }, [])

    function onLoadBoard() {
        dispatch(loadBoard(boardId))
    }

    async function onRemoveBoard(boardId) {
        try {
            await removeGroup(groupId)
            showSuccessMsg('Group removed')
        } catch (err) {
            showErrorMsg('Cannot remove group')
        }
    }

    async function onAddGroup() {
        const group = groupService.getEmptyGroup()
        group.vendor = prompt('Vendor?')
        try {
            const savedGroup = await addGroup(group)
            showSuccessMsg(`Group added (id: ${savedGroup._id})`)
        } catch (err) {
            showErrorMsg('Cannot add group')
        }
    }

    return (
        <section className="board-container">
            {/* <h3>Board {board.title}</h3> */}
            <main></main>
        </section>
    )
}
