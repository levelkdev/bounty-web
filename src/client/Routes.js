import React from 'react'
import { Router, Route, Redirect } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import RouterStore from 'stores/RouterStore'
import App from 'views/App'
import Home from 'views/Home'
import IPFS from 'views/IPFS'
import NewBounty from 'views/NewBounty'
import { syncHistoryWithStore } from 'mobx-react-router'

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, RouterStore)

const Routes = () =>
  <Router history={history}>
    <App>
      <Route path='/home' component={Home} />
      <Route path='/ipfs' component={IPFS} />
      <Route path='/new-bounty' component={NewBounty} />
    </App>
  </Router>

export default Routes
