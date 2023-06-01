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

export function BoardIndex() {
    const boards = useSelector((storeState) => storeState.boardModule.boards)
    const { boardId } = useParams()
    const { board } = useSelector((storeState) => storeState.boardModule)

    useEffect(() => {
        onLoadBoards()
        onLoadBoard()
    }, [])


    async function onLoadBoards() {
        loadBoards()
    }
    
    
    async function onLoadBoard() {

        loadBoard(boardId)
        // const boardFromDb = await boardService.getById(boardId)
        // setBoard(boardFromDb)
    }

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
    // if (board) console.log(board)
    if (!board) return
    return (
        <section className="board-container">

            <main className='board-content'>
            {board.groups.map(group =>
                <GroupDetails group={group} key={group.id} />
            )}
            </main>
        </section>
    )
}
