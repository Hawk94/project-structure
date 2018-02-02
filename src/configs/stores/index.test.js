import { configureStore } from '.'

it('returns store initial state', () => {
  expect(configureStore().getState()).toEqual({
    auth: { isLoading: false, isSignedIn: false, errors: [], me: null },
    form: {},
    toasts: { toasts: [] }
  })
})
