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
import img from '../assets/img/background.jpg'

export function BoardIndex() {
    // const boards = useSelector((storeState) => storeState.boardModule.boards)
    const { boardId } = useParams()
    const { board } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()

    useEffect(() => {
        loadBoards()
        loadBoard(boardId)
    }, [updateBoard])

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

    async function addGroup(group) {
        console.log(group)
        try {
            const currBoard = await saveGroup(group, boardId)
            updateBoard(currBoard)
            // dispatch({ type: SET_BOARD, board: updatedBoard })
        } catch (err) {
            console.log(err)
        } finally {
            loadBoards()
            loadBoard(boardId)
        }
    }

    async function removeGroup(group) {
        try {
            const updatedBoard = await groupService.removeGroup(
                group.id,
                boardId
            )
            dispatch({ type: SET_BOARD, board: updatedBoard })
        } catch (err) {
            console.log(err)
        } finally {
            loadBoards()
            loadBoard(boardId)
        }
    }

    if (!board) return
    return (
        <div>
            <AppHeader />
            <section
                className="board-container"
                // style={
                //     board.style?.backgroundImage
                //         ? {
                //               backgroundImage: `url(${board.style.backgroundImage})`,
                //               backgroundSize: 'cover',
                //               backgroundPosition: 'center',
                //               backgroundRepeat: 'no-repeat',
                //           }
                //         : { backgroundImage: `url('')` }
                // }
            >
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
