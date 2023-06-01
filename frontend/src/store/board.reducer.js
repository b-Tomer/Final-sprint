export const SET_BOARDS = 'SET_BOARDS'
export const REMOVE_BOARD = 'REMOVE_BOARD'
export const ADD_BOARD = 'ADD_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_BOARD = 'SET_BOARD'
export const FILTER_BY = 'FILTER_BY'

const initialState = {
    boards: [],
    filterBy: {
        txt: '',
    },
    board: null,
}

export function boardReducer(state = initialState, action) {
    var newState = state
    var boards
    var currBoard
    switch (action.type) {
        case SET_BOARD:
            console.log('action: ', action )
            currBoard = state.boards.find(
                (b) => b._id === action.board._id
            )
            console.log(currBoard)
            newState = { ...state, board: currBoard }
            break
        case SET_BOARDS:
            newState = { ...state, boards: action.boards }
            break
        case REMOVE_BOARD:
            boards = state.boards.filter((c) => c._id !== action.boardId)
            newState = { ...state, boards }
            break
        case ADD_BOARD:
            newState = { ...state, boards: [...state.boards, action.board] }
            break
        case UPDATE_BOARD:
            boards = state.boards.map((board) =>
                board._id === action.board._id ? action.board : board
            )
            newState = { ...state, boards }
            break
        case FILTER_BY:
            newState = { ...state, filterBy: action.filterBy }
            break
        case SET_IS_LOADING:
            newState = { ...state, isLoading: action.isLoading }
            break
        default:
            return newState
    }

    return newState
}
