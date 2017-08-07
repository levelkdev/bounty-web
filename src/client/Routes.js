import React from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import RouterStore from 'stores/RouterStore'
import App from 'views/App'
import Home from 'views/Home'
import { syncHistoryWithStore } from 'mobx-react-router'

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, RouterStore)

const Routes = () =>
  <Router history={history}>
    <App>
      <Route path='/' component={Home} />
    </App>
  </Router>

export default Routes
