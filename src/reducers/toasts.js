import { SHOW, DESTROY } from 'actions/toasts'

const initialState = {
  toasts: []
}

const toastsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        toasts: [...state.toasts, action.payload]
      }
    case DESTROY:
      return {
        ...state,
        toasts: state.toasts.filter(toasts => toasts.id !== action.id)
      }
    default:
      return state
  }
}

export default toastsReducer
