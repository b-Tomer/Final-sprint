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
import { removeGroup, saveGroup } from '../store/group.actions.js'
import { TaskEditor } from '../cmps/task/task-editor.jsx'
import { TaskDetails } from '../cmps/task/task-details.jsx'

export function BoardIndex() {
    const { boardId } = useParams()
    const { board } = useSelector((storeState) => storeState.boardModule)
    const { groupId } = useParams()
    const { taskId } = useParams()
    const dispatch = useDispatch()
    const [taskEdit, setTaskEdit] = useState(null)
    const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false)
    const [isLabelsExpand, setIsLabelsExpand] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [labelsFont, setLabelsFont] = useState('0px')
    const { filterBy } = useSelector((storeState) => storeState.boardModule)

    useEffect(() => {
        loadBoards()
        onLoadBoard(filterBy)
    }, [filterBy])

    async function onLoadBoard(filterBy) {
        await loadBoard(boardId, filterBy)
        if (taskId) setIsTaskDetailsOpen(true)
        console.log(boardId)
        // if (board.style.backgroundImage) {
        //     setIsLoaded(true)
        // }
    }

    // useEffect(() => {
    //     if (board.style.backgroundImage) {
    //         setIsLoaded(true)
    //     }
    // }, [board.style.backgroundImage])

    async function addGroup(group) {
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

    async function onRemoveGroup(group) {
        try {
            await removeGroup(group.id, boardId)
        } catch (err) {
            console.log(err)
        }
    }

    function onExpandLabels() {
        setIsLabelsExpand(!isLabelsExpand)
        if (isLabelsExpand) setLabelsFont('0.75rem')
        else setLabelsFont('0px')
    }

    function onSetfilter(filterByToUpdate) {
        setFilterBy(filterByToUpdate)
    }

    // console.log(board.style.backgroundImage)

    if (!board) return
    return (
        <>
            <div>
                <AppHeader onSetfilter={onSetfilter} />
                <section
                    className="board-container"
                    // style={
                    //     isLoaded && {
                    //         // backgroundImage: `url(${board.style.backgroundImage})`,
                    //         color: 'red',
                    //     }
                    // }
                >
                    <BoardHeader />
                    <main className="board-content">
                        {board?.groups &&
                            board.groups.map((group) => (
                                <GroupDetails
                                    labelsFont={labelsFont}
                                    isLabelsExpand={isLabelsExpand}
                                    onExpandLabels={onExpandLabels}
                                    boardId={boardId}
                                    onRemoveGroup={onRemoveGroup}
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
        </>
    )
}
