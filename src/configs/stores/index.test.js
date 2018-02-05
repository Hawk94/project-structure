import { configureStore } from '.'

it('returns store initial state', () => {
  expect(configureStore().getState()).toEqual({
    auth: { errors: [], isLoading: false, isSignedIn: false, me: null },
    form: {},
    toasts: []
  })
})
