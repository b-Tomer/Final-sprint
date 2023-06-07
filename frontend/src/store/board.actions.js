import { boardService } from '../services/board.service.local.js'
import { store } from './store.js'

import {
    ADD_BOARD,
    REMOVE_BOARD,
    SET_BOARDS,
    UPDATE_BOARD,
    SET_BOARD,
    FILTER_BY,
} from './board.reducer.js'

// Action Creators:
export function getActionRemoveBoard(boardId) {
    return {
        type: REMOVE_BOARD,
        boardId,
    }
}
export function getActionAddBoard(board) {
    return {
        type: ADD_BOARD,
        board,
    }
}

export function getActionUpdateBoard(board) {
    return {
        type: UPDATE_BOARD,
        board,
    }
}

export function getActionSetBoard(board) {
    return {
        type: SET_BOARD,
        board,
    }
}

export async function loadBoard(boardId, filterBy = {}) {
    try {
        const board = await boardService.getById(boardId)
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            let groupsToShow = board.groups.filter((group) =>
                regex.test(group.title)
            )
            //    || board.groups.filter(group => group.tasks.forEach(task=> regex.test(task.title)))
            board.groups = groupsToShow
        }
        store.dispatch({
            type: SET_BOARD,
            board,
        })
    } catch (err) {
        console.log('Cannot load board', err)
    }
}

export async function loadBoards(filterBy) {
    try {
        const boards = await boardService.query(filterBy)
        store.dispatch({
            type: SET_BOARDS,
            boards,
        })
    } catch (err) {
        console.log('Cannot load boards', err)
        throw err
    }
}

export async function removeBoard(boardId) {
    try {
        await boardService.remove(boardId)
        store.dispatch(getActionRemoveBoard(boardId))
    } catch (err) {
        console.log('Cannot remove board', err)
        throw err
    }
}

export async function addBoard(board) {
    try {
        const savedBoard = await boardService.save(board)
        store.dispatch(getActionAddBoard(savedBoard))
        return savedBoard
    } catch (err) {
        console.log('Cannot add board', err)
        throw err
    }
}

export async function updateBoard(boardToUpdate) {
    try {
        try {
            store.dispatch(getActionSetBoard(boardToUpdate))
            const board = await boardService.save(boardToUpdate)
        } catch (err) {
            
        }

    } catch (err) {
        console.log('Cannot save board', err)
    }
}

export function setFilterBy(filterBy) {
    store.dispatch({
        type: FILTER_BY,
        filterBy,
    })
}
