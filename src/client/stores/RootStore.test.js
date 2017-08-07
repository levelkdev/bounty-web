/* globals test expect */

import RootStore from 'stores/RootStore'

test('RootStore', () => {
  expect(RootStore.showMessage).toBe(true)
})
