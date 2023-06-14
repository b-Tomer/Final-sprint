import { boardService } from './board.service'
import { utilService } from './util.service'

export const taskService = {
    removeTask,
    getDefaultTask,
    saveTask,
    updateTask,
}

function getDefaultTask() {
    const task = {}
    task.title = ''
    task.attachments = []
    task.labelIds = []
    task.checklists = []
    task.style = {}
    task.members = []
    task.createdAt = Date.now()
    task.isDone = false
    return task
}

async function saveTask(task, boardId, groupId, activity) {
    const board = await boardService.getById(boardId)
    if (activity) {
        board.activities?.push(activity)
        if (board.activities.length > 99) {
            board.activities?.shift()
        }
    }
    if (task.id) {
        const groupIdx = board.groups.findIndex((group) => groupId === group.id)
        const taskIdx = board.groups[groupIdx].tasks.findIndex(
            (currTask) => currTask.id === task.id
        )
        board.groups[groupIdx].tasks[taskIdx] = task
        board = await boardService.save(board)
        return board
    } else {
        task.id = utilService.makeId()
        const idx = board.groups.findIndex((group) => groupId === group.id)
        board.groups[idx].tasks.push(task)
        await boardService.save(board)
        return board
    }
}

async function updateTask(board, groupId, task, activity) {
    const groupIdx = board.groups.findIndex((group) => group.id === groupId)
    const taskIdx = board.groups[groupIdx].tasks.findIndex(
        (currTask) => currTask.id === task.id
    )
    if (activity) {
        board.activities?.push(activity)
        if (board.activities.length > 99) {
            board.activities?.shift()
        }
    }
    board.groups[groupIdx].tasks.splice(taskIdx, 1, task)
    return board
}

async function removeTask(boardId, groupId, taskId, activity) {
    const board = await boardService.getById(boardId)
    const groupIdx = board.groups.findIndex((group) => groupId === group.id)
    const taskIdx = board.groups[groupIdx].tasks.findIndex(
        (task) => taskId === task.id
    )
    board.groups[groupIdx].tasks.splice(taskIdx, 1)
    board.activities?.push(activity)
    await boardService.save(board)
    return board
}
