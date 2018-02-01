import { configureStore } from '.'

it('returns store initial state', () => {
  expect(configureStore().getState()).toEqual({})
})
