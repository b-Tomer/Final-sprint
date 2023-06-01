import { useSelector } from 'react-redux'
import { BoardPreview } from '../cmps/board-preview'
import { AppHeader } from '../cmps/app-header'
import {
    loadBoards,
} from '../store/board.actions.js'
import { useEffect } from 'react'
import { ReactComponent as Starred } from '../assets/img/icons/starred.svg'
import { ReactComponent as Clock } from '../assets/img/icons/clock.svg'


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
                <div>
                    <div className='starred-board-title'>
                        <Starred className='starred-btn' />
                        <span>Starred board</span>
                    </div>
                    <div className='starred-boards-container'>
                        {boards
                            .filter((board) => board.isStarred)
                            .map((board) => <BoardPreview board={board} key={board._id} />)
                        }
                    </div>
                </div>
                <div>
                    <div className='recently-viewed-title'>
                        <Clock className='starred-btn' />
                        <span>Recently viewed</span>
                    </div>
                    <div className='recently-viewed-container'>
                        {boards
                            .filter((board) => !board.isStarred)
                            .map((board) => <BoardPreview board={board} key={board._id} />)
                        }
                    </div>
                </div>
            </section>
        </section>
    )
}

