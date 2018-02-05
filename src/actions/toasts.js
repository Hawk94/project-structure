import { guid } from 'helpers/utils'

export const TOAST_ADD = 'TOAST_ADD'
export const TOAST_HIDE = 'TOAST_HIDE'

export const createToast = ({ text }) => {
  const id = guid()
  return {
    type: TOAST_ADD,
    payload: {
      id,
      text,
      isVisible: true
    }
  }
}

export const hideToast = payload => ({
  type: TOAST_HIDE,
  payload
})
