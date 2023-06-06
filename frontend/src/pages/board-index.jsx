import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBoards, loadBoard, updateBoard, setFilterBy } from '../store/board.actions.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { useParams } from 'react-router-dom'
import { GroupDetails } from '../cmps/group-details.jsx'
import { BoardHeader } from '../cmps/board-header.jsx'
import { AppHeader } from '../cmps/app-header.jsx'
import { AddGroup } from '../cmps/add-group.jsx'
import { removeGroup, saveGroup } from '../store/group.actions.js'
import { TaskEditor } from '../cmps/task/task-editor.jsx'
import { TaskDetails } from '../cmps/task/task-details.jsx'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';


export function BoardIndex() {
    const { boardId } = useParams()
    const { board } = useSelector((storeState) => storeState.boardModule)
    const { groupId } = useParams()
    const { taskId } = useParams()
    const [taskEdit, setTaskEdit] = useState(null)
    const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false)
    const [isLabelsExpand, setIsLabelsExpand] = useState(false)
    const [labelsFont, setLabelsFont] = useState('0px')
    const { filterBy } = useSelector((storeState) => storeState.boardModule)
    const [draggableGroups, updateDraggableGroups] = useState(null)


    useEffect(() => {
        loadBoards()
        onLoadBoard(filterBy)
    }, [filterBy, boardId])

    useEffect(() => {
        if (board) {
            updateDraggableGroups(board.groups);
        }
    }, [board])

    async function onLoadBoard(filterBy) {
        await loadBoard(boardId, filterBy)
        if (taskId) setIsTaskDetailsOpen(true)
        console.log(boardId)
    }

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

    function onExpandLabels(ev) {
        ev.stopPropagation()
        setIsLabelsExpand(!isLabelsExpand)
        if (isLabelsExpand) setLabelsFont('0.75rem')
        else setLabelsFont('0px')
    }

    function onSetfilter(filterByToUpdate) {
        setFilterBy(filterByToUpdate)
    }


    function handleOnDraggEnd(result) {
        if (!result.destination) return
        const updatedGroups = Array.from(board.groups)
        const [reorderedGroup] = updatedGroups.splice(result.source.index, 1)
        updatedGroups.splice(result.destination.index, 0, reorderedGroup)
        const updatedBoard = { ...board, groups: updatedGroups }
        // console.log(updatedBoard);
        updateBoard(updatedBoard)
    }


    if (!board) return
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
                    <BoardHeader />
                    <main className="board-content">
                        <DragDropContext onDragEnd={handleOnDraggEnd}>
                            <Droppable droppableId="groups">
                                {(provided) => (
                                    <div className="group-draggable-list" {...provided.droppableProps} ref={provided.innerRef}>
                                        {board?.groups &&
                                            board.groups.map((group, index) => (
                                                <Draggable key={group.id} draggableId={group.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            className={`group-card ${snapshot.isDragging ? 'dragging' : ''}`}
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                                                               >
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
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                        {provided.placeholder}
                                        <AddGroup addGroup={addGroup} />
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
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
