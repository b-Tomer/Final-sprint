import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    loadBoards,
    loadBoard,
    updateBoard,
    setFilterBy,
} from '../store/board.actions.js'
import { showErrorMsg } from '../services/event-bus.service.js'
import { useParams } from 'react-router-dom'
import { GroupDetails } from '../cmps/group-details.jsx'
import { BoardHeader } from '../cmps/board-header.jsx'
import { AppHeader } from '../cmps/app-header.jsx'
import { AddGroup } from '../cmps/add-group.jsx'
import { removeGroup, saveGroup } from '../store/group.actions.js'
import { TaskEditor } from '../cmps/task/task-editor.jsx'
import { TaskDetails } from '../cmps/task/task-details.jsx'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { utilService } from '../services/util.service.js'
import { isEmpty } from 'lodash'
import { boardService } from 'services/board.service.local.js'
import { userService } from 'services/user.service.js'
import { UPDATE_BOARD_LIVE, socketService } from 'services/socket.service.js'
import { SET_BOARD } from 'store/board.reducer.js'
import { store } from 'store/store.js'
import { Loarder } from 'cmps/loader.jsx'

export function BoardIndex() {
    const { boardId } = useParams()
    const { board } = useSelector((storeState) => storeState.boardModule)
    const { isLoading } = useSelector((storeState) => storeState.boardModule)
    const { groupId } = useParams()
    const { taskId } = useParams()
    const boardRef = useRef()
    const [taskEdit, setTaskEdit] = useState(null)
    const [selectedTaskId, setSelectedTaskId] = useState(null)
    const [placeholderProps, setPlaceholderProps] = useState({})
    const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false)
    const [isLabelsExpand, setIsLabelsExpand] = useState(false)
    const [labelsFont, setLabelsFont] = useState('0px')
    const { filterBy } = useSelector((storeState) => storeState.boardModule)
    const queryAttr = 'data-rbd-drag-handle-draggable-id'

    useEffect(() => {
        onLoadBoard(filterBy)
        socketService.emit('join-board', boardId)
        socketService.on(UPDATE_BOARD_LIVE, (board) => {
            store.dispatch({ type: SET_BOARD, board })
        })
        return () => {
            socketService.off(UPDATE_BOARD_LIVE)
        }
    }, [filterBy, boardId])

    async function onLoadBoard(filterBy) {
        await loadBoard(boardId, filterBy)
        if (taskId) setIsTaskDetailsOpen(true)
    }

    async function addGroup(group) {
        try {
            const currBoard = await saveGroup(group, boardId)
            const activity = boardService.getEmptyActivity()
            activity.memberId = userService.getLoggedinUser()?._id
                ? userService.getLoggedinUser()._id
                : null
            activity.taskId = null
            activity.by = userService.getLoggedinUser()?.fullname
                ? userService.getLoggedinUser().fullname
                : 'Guest'
            activity.title = `Added group to board`
            if (activity) currBoard.activities.push(activity)
            await updateBoard(currBoard)
        } catch (err) {
            console.log(err)
            showErrorMsg('Can not add a group')
        } finally {
            loadBoards()
            loadBoard(boardId)
            boardRef.current.scrollTo({
                left: 90000,
                top: 0,
                behavior: 'smooth',
            })
        }
    }

    async function onRemoveGroup(group) {
        try {
            const activity = boardService.getEmptyActivity()
            activity.memberId = userService.getLoggedinUser()?._id
                ? userService.getLoggedinUser()._id
                : null
            activity.taskId = null
            activity.by = userService.getLoggedinUser()?.fullname
                ? userService.getLoggedinUser().fullname
                : 'Guest'
            activity.title = `Removed group from board`
            await removeGroup(group.id, boardId, activity)
        } catch (err) {
            console.log(err)
        }
    }

    function onExpandLabels(ev) {
        ev.stopPropagation()
        setIsLabelsExpand(!isLabelsExpand)
        if (isLabelsExpand) setLabelsFont('0.75rem')
        else setLabelsFont('0px')
    }

    function onSetfilter(filterByToUpdate) {
        setFilterBy(filterByToUpdate)
    }

    const getDraggedDom = (draggableId) => {
        const domQuery = `[${queryAttr}='${draggableId}']`
        const draggedDOM = document.querySelector(domQuery)
        return draggedDOM
    }

    const onDragStart = (event) => {
        const draggedDOM = getDraggedDom(event.draggableId)
        if (!draggedDOM) return
        const placeholderProps = utilService.handleDragStart(event, draggedDOM)
        setPlaceholderProps(placeholderProps)
    }

    const onDragUpdate = (event) => {
        if (!event.destination) return
        const draggedDOM = getDraggedDom(event.draggableId)
        if (!draggedDOM) return
        const placeholderProps = utilService.handleDragUpdate(event, draggedDOM)
        setPlaceholderProps(placeholderProps)
    }

    const onDragEnd = (result) => {
        console.log(result)
        const { destination, source, type } = result
        if (!destination) return
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        )
            return

        const newBoard = structuredClone(board)
        let updatedBoard = utilService.handleDragEnd(
            newBoard,
            destination,
            source,
            type
        )
        if (type === 'task' && destination.droppableId !== source.droppableId) {
            const sourceGroup = updatedBoard.groups.find(
                (group) => group.id === source.droppableId
            )
            const destinationGroup = updatedBoard.groups.find(
                (group) => group.id === destination.droppableId
            )
            const task = destinationGroup.tasks[destination.index]

            const activity = boardService.getEmptyActivity()
            activity.taskId = destinationGroup.tasks[destination.index].id
            activity.memberId = userService.getLoggedinUser()?._id
                ? userService.getLoggedinUser()._id
                : null
            activity.by = userService.getLoggedinUser()?.fullname
                ? userService.getLoggedinUser().fullname
                : 'Guest'
            activity.title = `moved task ${
                destinationGroup.tasks[destination.index].title
            } from group ${sourceGroup.title} to group ${
                destinationGroup.title
            }`
            activity.titleInTask = `moved this task from group ${sourceGroup.title} to group ${destinationGroup.title}`
            if (activity) updatedBoard.activities.push(activity)
        }
        updateBoard(updatedBoard)
    }

    if (!board || isLoading) return <Loarder />
    return (
        <>
            <div>
                <AppHeader onSetfilter={onSetfilter} />

                <section
                    className="board-container"
                    style={{
                        backgroundImage: `url(${board.style?.backgroundImage})`,
                    }}
                >
                    <DragDropContext
                        onDragStart={onDragStart}
                        onDragUpdate={onDragUpdate}
                        onDragEnd={onDragEnd}
                    >
                        <BoardHeader board={board} />
                        <main ref={boardRef} className="board-content">
                            <Droppable
                                droppableId={board._id}
                                direction="horizontal"
                                type="group"
                            >
                                {(provided, snapshot) => (
                                    <section
                                        className="group-list"
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {board?.groups &&
                                            board.groups.map((group, index) => (
                                                <Draggable
                                                    draggableId={group.id}
                                                    key={group.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <GroupDetails
                                                            labelsFont={
                                                                labelsFont
                                                            }
                                                            isLabelsExpand={
                                                                isLabelsExpand
                                                            }
                                                            onExpandLabels={
                                                                onExpandLabels
                                                            }
                                                            boardId={boardId}
                                                            onRemoveGroup={
                                                                onRemoveGroup
                                                            }
                                                            group={group}
                                                            key={group.id}
                                                            setTaskEdit={
                                                                setTaskEdit
                                                            }
                                                            taskEdit={taskEdit}
                                                            setIsTaskDetailsOpen={
                                                                setIsTaskDetailsOpen
                                                            }
                                                            isTaskDetailsOpen={
                                                                isTaskDetailsOpen
                                                            }
                                                            provided={provided}
                                                            isDragging={
                                                                snapshot.isDragging
                                                            }
                                                            selectedTaskId={
                                                                selectedTaskId
                                                            }
                                                            setSelectedTaskId={
                                                                setSelectedTaskId
                                                            }
                                                        />
                                                    )}
                                                </Draggable>
                                            ))}
                                        {provided.placeholder}
                                        {!isEmpty(placeholderProps) &&
                                            snapshot.isDraggingOver && (
                                                <div
                                                    className="placeholder"
                                                    style={{
                                                        position: 'absolute',
                                                        top: placeholderProps.clientY,
                                                        left: placeholderProps.clientX,
                                                        height: placeholderProps.clientHeight,
                                                        width: placeholderProps.clientWidth,
                                                        backgroundColor:
                                                            '#00000023',
                                                        borderRadius: '12px',
                                                        marginLeft: '14px',
                                                    }}
                                                />
                                            )}
                                        <AddGroup addGroup={addGroup} />
                                    </section>
                                )}
                            </Droppable>
                        </main>
                    </DragDropContext>
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
                    selectedTaskId={selectedTaskId}
                    setSelectedTaskId={setSelectedTaskId}
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
