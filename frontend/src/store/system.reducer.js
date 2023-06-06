export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const OPEN_DYN_MODAL = 'OPEN_DYN_MODAL'
export const CLOSE_DYN_MODAL = 'CLOSE_DYN_MODAL'
export const SET_MODAL_TITLE = 'SET_MODAL_TITLE'
export const OPEN_DYN_MENU_MODAL = 'OPEN_DYN_MENU_MODAL'
export const CLOSE_DYN_MENU_MODAL = 'CLOSE_DYN_MENU_MODAL'
export const OPEN_DYN_EDIT_ATC = 'OPEN_DYN_EDIT_ATC'
export const CLOSE_DYN_EDIT_ATC = 'CLOSE_DYN_EDIT_ATC'

const initialState = {
    isLoading: false,
    isModalOpen: false,
    isMenuModalOpen: false,
    isOpenEditAtc: false,
    modalTitle: '',
}

export function systemReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOADING_START:
            return { ...state, isLoading: true }
        case LOADING_DONE:
            return { ...state, isLoading: false }
        case OPEN_DYN_MODAL:
            console.log('Open modal ')
            return { ...state, isModalOpen: true }
        case CLOSE_DYN_MODAL:
            return { ...state, isModalOpen: false }
        case OPEN_DYN_MENU_MODAL:
            return { ...state, isMenuModalOpen: true }
        case CLOSE_DYN_MENU_MODAL:
            return { ...state, isMenuModalOpen: false }
        case OPEN_DYN_EDIT_ATC:
            return { ...state, isOpenEditAtc: true }
        case CLOSE_DYN_EDIT_ATC:
            return { ...state, isOpenEditAtc: false }
        case SET_MODAL_TITLE:
            console.log('action.title: ', action.title)
            return { ...state, modalTitle: action.title }
        default:
            return state
    }
}
