import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    loadBoards,
    addBoard,
    removeBoard,
    loadBoard,
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
    }, [])

    // useEffect(() => {
    //     onLoadBoard()
    // }, [isEditing])

    // async function onLoadBoards() {
    //     loadBoards()
    // }

    // async function onLoadBoard() {
    //     loadBoard(boardId)
    //     // const boardFromDb = await boardService.getById(boardId)
    //     // setBoard(boardFromDb)
    // }

    async function onRemoveBoard(boardId) {
        try {
            await removeBoard(boardId)
            showSuccessMsg('Board removed')
        } catch (err) {
            showErrorMsg('Cannot remove board')
        }
    }

    async function onAddBoard() {
        const board = boardService.getEmptyBoard()
        board.vendor = prompt('Vendor?')
        try {
            const savedBoard = await addBoard(board)
            showSuccessMsg(`Board added (id: ${savedBoard._id})`)
        } catch (err) {
            showErrorMsg('Cannot add board')
        }
    }

    async function addList(group) {
        console.log(group)
        try {
            await saveGroup(group, boardId)
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
                    <AddGroup addList={addList} />
                </main>
            </section>
        </div>
    )
}
