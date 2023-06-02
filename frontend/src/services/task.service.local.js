import { boardService } from "./board.service.local"
import { utilService } from "./util.service"


export const taskService = {
    removeTask,
    getDefaultTask,
    saveTask,
}

function getDefaultTask() {
    const task = {}
    task.id = utilService.makeId()
    task.attachments = []
    task.labelIds = []
    task.checklists = []
    task.style = {}
    task.members = []
    task.createdAt = Date.now()
}


async function saveTask(task, boardId, groupId) {
    let board = await boardService.getById(boardId)
    if (task.id) {
        const groupIdx = board.groups.findIndex(group => groupId === group.id)
        const taskIdx = board.groups[groupIdx].tasks.findIndex(currTask => currTask.id === task.id)
        board.groups[groupIdx].tasks[taskIdx] = task
        board = await boardService.save(board)
        return board
    } else {
        // const board = await boardService.getById(boardId)
        const idx = board.groups.findIndex(group => groupId === group.id)
        board.groups[idx].tasks.push(task)
        boardService.save(board)
        return board
    }
}


async function removeTask(boardId, groupId, taskId) {
    const board = await boardService.getById(boardId)
    const groupIdx = board.groups.findIndex(group => groupId === group.id)
    const taskIdx = board.groups[groupIdx].tasks.findIndex(task => taskId === task.id)
    board.groups[groupIdx].tasks.splice(taskIdx, 1)
    await boardService.save(board)
    return board
}