export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const OPEN_DYN_MODAL = 'OPEN_DYN_MODAL'
export const CLOSE_DYN_MODAL = 'CLOSE_DYN_MODAL'
const initialState = {
  isLoading: false,
  isModalOpen: true
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
    default: return state
  }
}
