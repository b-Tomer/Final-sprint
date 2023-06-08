export const SET_BOARDS = 'SET_BOARDS'
export const REMOVE_BOARD = 'REMOVE_BOARD'
export const ADD_BOARD = 'ADD_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_BOARD = 'SET_BOARD'
export const SET_LABEL_TO_EDIT = 'SET_LABEL_TO_EDIT'
export const SET_ATC_TO_EDIT = 'SET_ATC_TO_EDIT'
export const FILTER_BY = 'FILTER_BY'

const initialState = {
    boards: [],
    filterBy: {
        txt: '',
    },
    board: null,
    lastUpdatedBoard: null,
    label: null,
    atc:'heyyy'
}

export function boardReducer(state = initialState, action) {
    var newState = state
    var boards
    var currBoard
    switch (action.type) {
        case SET_BOARD:
            newState = { ...state, board: action.board }
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
        case SET_LABEL_TO_EDIT:
            newState = { ...state, label: action.label }
        case SET_ATC_TO_EDIT:
            newState = { ...state, atc: action.atc }
            break
        default:
        // return newState
    }

    return newState
}
