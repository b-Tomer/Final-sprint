import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'

import {
    loadBoards,
    addBoard,
    removeBoard,
    loadBoard,
    updateBoard,
    setFilterBy,
} from '../store/board.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { useParams } from 'react-router-dom'
import { GroupDetails } from '../cmps/group-details.jsx'
import { BoardHeader } from '../cmps/board-header.jsx'
import { AppHeader } from '../cmps/app-header.jsx'
import { AddGroup } from '../cmps/add-group.jsx'
import { groupService } from '../services/group.service.local.js'
import { SET_BOARD } from '../store/board.reducer.js'
import { saveGroup } from '../store/group.actions.js'
import { TaskEditor } from '../cmps/task/task-editor.jsx'
import { TaskDetails } from '../cmps/task/task-details.jsx'
import { store } from '../store/store.js'

export function BoardIndex() {

    const { boardId } = useParams()
    const { board } = useSelector((storeState) => storeState.boardModule)
    const { groupId } = useParams()
    const { taskId } = useParams()
    const dispatch = useDispatch()
    const [taskEdit, setTaskEdit] = useState(null)
    const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false)
    const [isLabelsExpand, setIsLabelsExpand] = useState(false)
    const [labelsFont, setLabelsFont] = useState('0px')
    const { filterBy } = useSelector((storeState) => storeState.boardModule)

    console.log(filterBy)

    useEffect(() => {
        loadBoards(filterBy)
        onLoadBoard()
    }, [updateBoard])

    function onLoadBoard() {
        loadBoard(boardId)
    }

    async function addGroup(group) {
        // console.log(group)
        try {
            const currBoard = await saveGroup(group, boardId)
            updateBoard(currBoard)
        } catch (err) {
            console.log(err)
            showErrorMsg('Can not add a group')
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

    function onExpandLabels() {
        setIsLabelsExpand(!isLabelsExpand)
        if (isLabelsExpand) setLabelsFont('12px')
        else setLabelsFont('0px')
    }

    function onSetfilter(filterByToUpdate){
        setFilterBy(filterByToUpdate)
    }

    if (!board) return
    return (
        <Fragment>
            <div>
                <AppHeader onSetfilter={onSetfilter} />
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
                                labelsFont={labelsFont}
                                isLabelsExpand={isLabelsExpand}
                                onExpandLabels={onExpandLabels}
                                boardId={boardId}
                                removeGroup={removeGroup}
                                group={group}
                                key={group.id}
                                setTaskEdit={setTaskEdit}
                                taskEdit={taskEdit}
                                setIsTaskDetailsOpen={setIsTaskDetailsOpen}
                                isTaskDetailsOpen={isTaskDetailsOpen}
                            />
                        ))}
                        <AddGroup addGroup={addGroup} />
                    </main>
                </section>
            </div>
            {taskEdit && (
                <TaskEditor
                    setIsTaskDetailsOpen={setIsTaskDetailsOpen}
                    pos={taskEdit.pos}
                    task={taskEdit.task}
                    groupId={taskEdit.groupId}
                    setTaskEdit={setTaskEdit}
                    boardId={boardId}
                />
            )}
            {isTaskDetailsOpen && (
                <TaskDetails
                    isTaskDetailsOpen={isTaskDetailsOpen}
                    setIsTaskDetailsOpen={setIsTaskDetailsOpen}
                    taskId={taskId}
                    groupId={groupId}
                    boardId={boardId}
                />
            )}
        </Fragment>
    )
}
