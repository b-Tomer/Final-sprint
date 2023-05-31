import { useEffect } from 'react'
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

export function BoardIndex() {
    // const boards = useSelector(storeState => storeState.boardModule.boards)
    const dispatch = useDispatch()
    const { boardId } = useParams()
    const { board } = useSelector((storeState) => storeState.boardModule)

    useEffect(() => {
        onLoadBoard()
    }, [])

    function onLoadBoard() {
        dispatch(loadBoard(boardId))
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
    if (board) console.log(board)

    return (
        <section className="board-container">
            {/* <h3>Board {board.title}</h3> */}
            <main></main>
        </section>
    )
}
