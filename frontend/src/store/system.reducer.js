export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const SET_MODAL_TITLE = 'SET_MODAL_TITLE'
export const OPEN_DYN_MODAL = 'OPEN_DYN_MODAL'
export const CLOSE_DYN_MODAL = 'CLOSE_DYN_MODAL'
export const OPEN_DYN_MENU_MODAL = 'OPEN_DYN_MENU_MODAL'
export const OPEN_DYN_EDIT_ATC = 'OPEN_DYN_EDIT_ATC'
export const OPEN_DYN_DATE_MODAL = 'OPEN_DYN_DATE_MODAL'
export const OPEN_DYN_LABEL_MODAL = 'OPEN_DYN_LABEL_MODAL'
export const OPEN_DYN_MEMBER_MODAL = 'OPEN_DYN_MEMBER_MODAL'
export const CLOSE_DYN_ALL_MODALS = 'CLOSE_DYN_ALL_MODALS'
export const OPEN_DYN_EDITOR_MODAL = 'OPEN_DYN_EDITOR_MODAL'

const initialState = {
    isLoading: false,
    isModalOpen: false,
    isMenuModalOpen: false,
    isOpenEditAtc: false,
    isOpenDateModal: false,
    isOpenMemberModal: false,
    isOpenLabelModal: false,
    isOpenEditorModal: false,
    modalTitle: '',
}

export function systemReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOADING_START:
            return { ...state, isLoading: true }
        case LOADING_DONE:
            return { ...state, isLoading: false }
        case OPEN_DYN_MODAL:
            return { ...state, isModalOpen: true }
        case CLOSE_DYN_MODAL:
            return { ...state, isModalOpen: false }
        case OPEN_DYN_MENU_MODAL:
            return { ...state, isMenuModalOpen: true }
        case OPEN_DYN_EDIT_ATC:
            return { ...state, isOpenEditAtc: true }
        case OPEN_DYN_MEMBER_MODAL:
            return { ...state, isOpenMemberModal: true }
        case OPEN_DYN_DATE_MODAL:
            return { ...state, isOpenDateModal: true }
        case OPEN_DYN_LABEL_MODAL:
            return { ...state, isOpenLabelModal: true }
        case OPEN_DYN_EDITOR_MODAL:
            return { ...state, isOpenEditorModal: true }
        case CLOSE_DYN_ALL_MODALS:
            return {
                ...state,
                isModalOpen: false,
                isMenuModalOpen: false,
                isOpenEditAtc: false,
                isOpenDateModal: false,
                isOpenLabelModal: false,
                isOpenMemberModal: false,
                isOpenEditorModal: false,
            }
        case SET_MODAL_TITLE:
            return { ...state, modalTitle: action.title }
        default:
            return state
    }
}
