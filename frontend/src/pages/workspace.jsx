import { useSelector } from 'react-redux'
import { BoardPreview } from '../cmps/board-preview'
import { AppHeader } from '../cmps/app-header'
import { loadBoards, setFilterBy, updateBoard } from '../store/board.actions.js'
import { useEffect } from 'react'
import { ReactComponent as Starred } from '../assets/img/icons/starred.svg'
import { ReactComponent as Clock } from '../assets/img/icons/clock.svg'
import { useState } from 'react'

import {
    CLOSE_DYN_ALL_MODALS,
    OPEN_DYN_MODAL,
    OPEN_DYN_NEW_BOARD_MODAL,
    SET_MODAL_TITLE,
} from 'store/system.reducer'
import { store } from 'store/store'
import { DynamicCmp } from 'cmps/dynamic-cmp/dynamic-cmp'
import { SET_BOARD } from 'store/board.reducer'
import { Loarder } from 'cmps/loader'

export function Workspace() {
    const [modalPos, setModalPos] = useState(null)
    const { isOpenNewBoardModal } = useSelector(
        (storeState) => storeState.systemModule
    )
    const boards = useSelector((storeState) => storeState.boardModule.boards)
    const { filterBy } = useSelector((storeState) => storeState.boardModule)
    const { isLoading } = useSelector((storeState) => storeState.boardModule)

    useEffect(() => {
        store.dispatch({ type: SET_BOARD, board: null })
        onLoadBoards(filterBy)
    }, [filterBy])

    async function onOpenNewBoard(ev) {
        const { top, left, height } = ev.target.getBoundingClientRect()
        setModalPos({ top, left, height })
        store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
        store.dispatch({ type: SET_MODAL_TITLE, title: 'New board' })
        store.dispatch({ type: OPEN_DYN_NEW_BOARD_MODAL })
        store.dispatch({ type: OPEN_DYN_MODAL })
    }

    // async function onRemoveBoard(boardId) {
    //     try {
    //         await removeBoard(boardId)
    //         showSuccessMsg('Board removed')
    //     } catch (err) {
    //         showErrorMsg('Cannot remove board')
    //     }
    // }

    async function onLoadBoards() {
        await loadBoards(filterBy)
    }

    function toggleStarredStatus(board) {
        board.isStarred = !board.isStarred
        updateBoard(board)
    }

    function onSetfilter(filterByToUpdate) {
        setFilterBy(filterByToUpdate)
    }

    if (isLoading) return <Loarder />
    if (!boards) return
    return (
        <section>
            <AppHeader onSetfilter={onSetfilter} />
            <section className="multy-boards-container">
                <div className="section-container">
                    <div className="starred-board-title">
                        <Starred className="boards-icon" />
                        <span>Starred board</span>
                    </div>
                    <div className="starred-boards-container">
                        {boards
                            .filter((board) => board.isStarred)
                            .map((board) => (
                                <BoardPreview
                                    board={board}
                                    key={board._id}
                                    toggleStarredStatus={toggleStarredStatus}
                                />
                            ))}
                    </div>
                </div>
                <div className="section-container">
                    <div className="recently-viewed-title">
                        <Clock className="boards-icon" />
                        <span>Recently viewed</span>
                    </div>
                    <div className="recently-viewed-container">
                        {boards.map((board) => (
                            <BoardPreview
                                board={board}
                                key={board._id}
                                toggleStarredStatus={toggleStarredStatus}
                            />
                        ))}
                        <div
                            onClick={onOpenNewBoard}
                            className="board-preview new-board-box"
                        >
                            <span>Create new board</span>
                        </div>
                    </div>
                </div>
            </section>
            {isOpenNewBoardModal && (
                <DynamicCmp title={'Create board'} modalPos={modalPos} />
            )}
        </section>
    )
}
