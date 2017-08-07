import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import fr from 'react-intl/locale-data/fr'
import it from 'react-intl/locale-data/it'
import RootStore from 'stores/RootStore'
import userLanguage from 'locale/userLanguage'
import getLocaleData from 'locale/getLocaleData'
import Routes from './Routes'

addLocaleData([...en, ...es, ...fr, ...it])
const language = userLanguage(navigator)
const messages = getLocaleData(language)

const stores = {
  RootStore
}

const app = (
  <IntlProvider locale={language} messages={messages}>
    <Provider {...stores}>
      <Routes />
    </Provider>
  </IntlProvider>
)

render(app, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
