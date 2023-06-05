import { groupService } from '../services/group.service.local.js'
import { utilService } from '../services/util.service.js'
import { getActionSetBoard } from './board.actions.js'
import { store } from './store.js'

export async function saveGroup(groupTitle, boardId, groupId) {
    try {
        console.log(groupTitle, boardId)
        const board = await groupService.saveGroup(groupTitle, boardId, groupId)
        store.dispatch(getActionSetBoard(board))
        return board
    } catch (err) {
        console.log('err in saving group')
    }
}

export async function setGroups(boardId, groups) {
    try {
        const board = await groupService.setGroups(boardId, groups)
        store.dispatch(getActionSetBoard(board))
    } catch (err) {
        console.log('err in saving task')
    }
}

export async function removeGroup(groupId, boardId) {
    try {
        const board = await groupService.removeGroup(groupId, boardId)
        store.dispatch(getActionSetBoard(board))
    } catch (err) {
        console.log('Cannot remove g', err)
    }
}
