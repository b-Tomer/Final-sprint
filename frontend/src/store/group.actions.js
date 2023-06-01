import { groupService } from "../services/group.service.local.js";
import { getActionSetBoard } from "./board.actions.js";

export function saveGroup(groupTitle, boardId, groupId) {
    return async (dispatch) => {
        try {
            const board = await groupService.saveGroup(groupTitle, boardId, groupId)
            dispatch(getActionSetBoard(board))
        } catch (err) {
            console.log('err in saving task')
        }
    }
}

export function setGroups(boardId, groups) {
    return async (dispatch) => {
        try {
            const board = await groupService.setGroups(boardId, groups)
            dispatch(getActionSetBoard(board))
        } catch (err) {
            console.log('err in saving task')
        }
    }
}


export function removeGroup(groupId, boardId) {

    return async (dispatch) => {
        try {
            const board = await groupService.removeGroup(groupId, boardId)
            dispatch(getActionSetBoard(board))
        } catch (err) {
            console.log('Cannot remove g', err)
        }
    }
}