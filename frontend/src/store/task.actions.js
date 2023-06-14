import { boardService } from '../services/board.service'
import { taskService } from '../services/task.service'
import { getActionSetBoard, getActionUpdateBoard } from './board.actions'
import { store } from './store'

export async function saveTask(task, boardId, groupId, activity) {
    try {
        const board = await taskService.saveTask(
            task,
            boardId,
            groupId,
            activity
        )
        store.dispatch(getActionSetBoard(board))
        return board
    } catch (err) {
        console.log('err in saving task')
    }
}

export async function removeTask(boardId, groupId, taskId, activity) {
    try {
        const board = await taskService.removeTask(
            boardId,
            groupId,
            taskId,
            activity
        )
        store.dispatch(getActionSetBoard(board))
    } catch (err) {
        console.log('Cannot remove task', err)
    }
}

export async function addTask() { }

export async function updateTask(boardId, groupId, task, activity) {
    try {
        const updatedBoard = await taskService.updateTask(
            boardId,
            groupId,
            task,
            activity
        )
        
        store.dispatch(getActionSetBoard(updatedBoard))
        await boardService.save(updatedBoard)
        
    } catch (err) {
        // store.dispatch(getActionSetBoard(updatedBoard))
        console.log('Cannot update task', err)
    }
}
