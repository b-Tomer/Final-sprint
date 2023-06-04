import { useDispatch, useSelector } from 'react-redux'
import { BoardPreview } from '../cmps/board-preview'
import { AppHeader } from '../cmps/app-header'
import {
    loadBoards, setFilterBy, updateBoard,
} from '../store/board.actions.js'
import { useEffect } from 'react'
import { ReactComponent as Starred } from '../assets/img/icons/starred.svg'
import { ReactComponent as Clock } from '../assets/img/icons/clock.svg'
// import { SET_BOARD } from '../store/board.reducer'



export function Workspace() {
    const boards = useSelector((storeState) => storeState.boardModule.boards)
    const { filterBy } = useSelector((storeState) => storeState.boardModule)

    useEffect(() => {
        onLoadBoards(filterBy)
    }, [filterBy])


    // async function onAddBoard() {
    //     const board = boardService.getEmptyBoard()
    //     try {
    //         const savedBoard = await addBoard(board)
    //         showSuccessMsg(`Board added (id: ${savedBoard._id})`)
    //     } catch (err) {
    //         showErrorMsg('Cannot add board')
    //     }
    // }

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
            .then(console.log)
    }

    function onSetfilter(filterByToUpdate){
        setFilterBy(filterByToUpdate)
    }


    if (!boards) return
    return (
        <section>
            <AppHeader onSetfilter={onSetfilter} />
            <section className='muilty-boards-container'>
                <div className='section-container'>
                    <div className='starred-board-title'>
                        <Starred className='boards-icon' />
                        <span>Starred board</span>
                    </div>
                    <div className='starred-boards-container'>
                        {boards
                            .filter((board) => board.isStarred)
                            .map((board) => <BoardPreview board={board} key={board._id} toggleStarredStatus={toggleStarredStatus} />)
                        }
                    </div>
                </div>
                <div className='section-container'>
                    <div className='recently-viewed-title'>
                        <Clock className='boards-icon' />
                        <span>Recently viewed</span>
                    </div>
                    <div className='recently-viewed-container'>
                        {boards
                            .map((board) => <BoardPreview board={board} key={board._id} toggleStarredStatus={toggleStarredStatus} />)
                        }
                    </div>
                </div>
            </section>
        </section>
    )
}

