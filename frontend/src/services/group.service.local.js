import { boardService } from './board.service.local'
import { utilService } from './util.service'

export const groupService = {
    saveGroup,
    removeGroup,
    setGroups,
}

async function saveGroup(groupTitle, boardId, groupId) {
    let board = await boardService.getById(boardId)
    if (groupId) {
        const idx = board.groups.findIndex((group) => groupId === group.id)
        board.groups[idx].title = groupTitle
        await boardService.save(board)
        return board
    } else {
        const group = { title: groupTitle }
        group.id = utilService.makeId()
        group.tasks = []
        // const board = await boardService.getById(boardId)
        board.groups.push(group)
        await boardService.save(board)
        return board
    }
}

async function removeGroup(groupId, boardId) {
    let board = await boardService.getById(boardId)
    const idx = board.groups.findIndex((group) => group.id === groupId)
    board.groups.splice(idx, 1)
    console.log('board from service: ', board )
    board = await boardService.save(board)
    return board
}

async function setGroups(boardId, groups) {
    try {
        const board = await boardService.getById(boardId)
        board.groups = groups
        await boardService.save(board)
        return board
    } catch (err) {
        console.log('err', err)
    }
}
