import { groupService } from '../services/group.service.local.js'
import { getActionSetBoard } from './board.actions.js'
import { store } from './store.js'

export async function saveGroup(groupTitle, boardId, groupId) {
    // return async (dispatch) => {
    try {
        console.log(groupTitle, boardId)
        const board = await groupService.saveGroup(groupTitle, boardId, groupId)
        store.dispatch(getActionSetBoard(board))
        return board
    } catch (err) {
        console.log('err in saving task')
    }
    // }
}

export async function setGroups(boardId, groups) {
    // return async (dispatch) => {
    try {
        const board = await groupService.setGroups(boardId, groups)
        store.dispatch(getActionSetBoard(board))
    } catch (err) {
        console.log('err in saving task')
    }
    // }
}

export async function removeGroup(groupId, boardId) {
    // return async (dispatch) => {
    try {
        const board = await groupService.removeGroup(groupId, boardId)
        store.dispatch(getActionSetBoard(board))
    } catch (err) {
        console.log('Cannot remove g', err)
    }
    // }
}
