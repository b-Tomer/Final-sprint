import { boardService } from '../services/board.service.local'
import { taskService } from '../services/task.service.local'
import { getActionSetBoard, getActionUpdateBoard } from './board.actions'
import { store } from './store'

export async function saveTask(task, boardId, groupId) {
    try {
        const board = await taskService.saveTask(task, boardId, groupId)
        store.dispatch(getActionSetBoard(board))
        return board
    } catch (err) {
        console.log('err in saving task')
    }
}

export async function removeTask(boardId, groupId, taskId) {
    try {
        const board = await taskService.removeTask(boardId, groupId, taskId)
        store.dispatch(getActionSetBoard(board))
    } catch (err) {
        console.log('Cannot remove task', err)
    }
}

export async function addTask() { }

export async function updateTask(boardId, groupId, task) {
    try {
        const updatedBoard = await taskService.updateTask(boardId, groupId, task)
        store.dispatch(getActionSetBoard(updatedBoard))
    } catch (err) {
        console.log('Cannot update task', err)
    }
}

