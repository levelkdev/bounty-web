import React from 'react'
import { FormattedMessage } from 'react-intl'
import { inject, observer } from 'mobx-react'
import fa from 'fa'
import css from './Hello.scss'

export default inject('RootStore')(observer(props => {
  const { showMessage } = props.RootStore

  const message = showMessage ? (
    <div>
      <i className={fa.btc} />
      <FormattedMessage
        id='Hello.message'
        defaultMessage='Hello!'
      />
    </div>
  ) : ''

  return (
    <div className={css.hello}>
      {message}
    </div>
  )
}))
