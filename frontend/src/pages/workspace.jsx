import { useSelector } from 'react-redux'
import { BoardPreview } from '../cmps/board-preview'
import { AppHeader } from '../cmps/app-header'
import {
    loadBoards,
} from '../store/board.actions.js'
import { useEffect } from 'react'


export function Workspace() {
    const boards = useSelector((storeState) => storeState.boardModule.boards)

    useEffect(() => {
        onLoadBoards()
    }, [])

    async function onLoadBoards() {
        await loadBoards()
    }

    if (!boards) return
    return (
        <section>
            <AppHeader />
            <section className='muilty-boards-container'>
                <div className='starred-board-title'>
                    <h3>Starred board</h3>
                </div>
                <div className='starred-boards-container'>
                    {boards
                        .filter((board) => board.isStarred)
                        .map((board) => <BoardPreview board={board} key={board._id} />)
                    }
                </div>
                <div className='recently-viewed-title'>
                    <h3>Recently viewed</h3>
                </div>
                <div className='recently-viewed-container'>
                    {boards
                        .filter((board) => !board.isStarred)
                        .map((board) => <BoardPreview board={board} key={board._id} />)
                    }
                </div>





            </section>
        </section>
    )
}

