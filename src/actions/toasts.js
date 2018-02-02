import { guid } from 'helpers/utils'

export const SHOW = 'SHOW'
export const DESTROY = 'DESTROY'

export const createToast = toast => {
  const id = guid()
  return {
    type: SHOW,
    payload: {
      promise: new Promise(resolve => {
        setTimeout(() => {
          resolve(id)
        }, toast.duration || 4500)
      }),
      data: { ...toast, id }
    }
  }
}

export const destroyToast = id => ({
  type: DESTROY,
  id
})
