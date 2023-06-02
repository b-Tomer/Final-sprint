import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    loadBoards,
    addBoard,
    removeBoard,
    loadBoard,
    updateBoard,
} from '../store/board.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { boardService } from '../services/board.service.local.js'
import { useParams } from 'react-router-dom'
import { GroupDetails } from '../cmps/group-details.jsx'
import { BoardHeader } from '../cmps/board-header.jsx'
import { AppHeader } from '../cmps/app-header.jsx'
import { AddGroup } from '../cmps/add-group.jsx'
import { groupService } from '../services/group.service.local.js'
import { SET_BOARD } from '../store/board.reducer.js'
import { saveGroup } from '../store/group.actions.js'

export function BoardIndex() {
    // const boards = useSelector((storeState) => storeState.boardModule.boards)
    const { boardId } = useParams()
    const { board } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()
    // const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        loadBoards()
        loadBoard(boardId)
    }, [updateBoard])

    async function addGroup(group) {
        console.log(group)
        try {
          const currBoard =  await saveGroup(group, boardId)
            updateBoard(currBoard)
            // setIsEditing(!isEditing)

            // dispatch({ type: SET_BOARD, board: updatedBoard })
        } catch (err) {
            console.log(err)
        }
        //  finally {
        //     loadBoards()
        //     loadBoard(boardId)
        // }
    }

    async function removeGroup(group) {
        const updatedBoard = await groupService.removeGroup(group.id, boardId)
        dispatch({ type: SET_BOARD, board: updatedBoard })
    }

    if (!board) return
    return (
        <div>
            <AppHeader />
            <section className="board-container">
                <BoardHeader />
                <main className="board-content">
                    {board.groups.map((group) => (
                        <GroupDetails
                            boardId={boardId}
                            removeGroup={removeGroup}
                            group={group}
                            key={group.id}
                        />
                    ))}
                    <AddGroup addGroup={addGroup} />
                </main>
            </section>
        </div>
    )
}
