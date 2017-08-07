/* global expect */

import React from 'react'
import { Provider } from 'mobx-react'
import { test, given } from 'sazerac'
import { shallow } from 'enzyme'
import RootStore from 'stores/RootStore'
import Hello from './Hello'

function renderHello () {
  return shallow(
    <Provider RootStore={RootStore} >
      <Hello />
    </Provider>
  )
}

test(renderHello, () => {
  given()
    .describe('when...')
    .assert('should...', (c) => {
      expect(c.find(Hello).length).toBe(1)
    })
})
