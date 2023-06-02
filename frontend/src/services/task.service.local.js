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
    task.title =''
    task.attachments = []
    task.labelIds = []
    task.checklists = []
    task.style = {}
    task.members = []
    task.createdAt = Date.now()
    return task
}


async function saveTask(task, boardId, groupId) {
    if (task.id) {
        let board = await boardService.getById(boardId)
        const groupIdx = board.groups.findIndex(group => groupId === group.id)
        const taskIdx = board.groups[groupIdx].tasks.findIndex(currTask => currTask.id === task.id)
        board.groups[groupIdx].tasks[taskIdx] = task
        board = await boardService.save(board)
        return board
    } else {
        console.log('task from service: ', task )
        const board = await boardService.getById(boardId)
        const idx = board.groups.findIndex(group => groupId === group.id)
        board.groups[idx].tasks.push(task)
       await boardService.save(board)
       console.log('board.groups[idx]: ', board.groups[idx] )
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