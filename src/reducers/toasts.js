import { TOAST_ADD, TOAST_HIDE } from 'actions/toasts'

const toastsReducer = (state = [], action) => {
  switch (action.type) {
    case TOAST_ADD:
      return [...state, action.payload]
    case TOAST_HIDE:
      return state.map((toast, index) => {
        if (toast.id === action.payload) {
          return Object.assign({}, toast, {
            isVisible: false
          })
        }
        return toast
      })
    default:
      return state
  }
}

export default toastsReducer
