import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Hello from 'components/Hello'
import css from './Home.scss'

export default class Home extends Component {
  render () {
    return (
      <div className={css.home}>
        <Hello />
        <Link to={'/new-bounty'}>
          <FormattedMessage
            id='NewBounty.createNewBounty'
            defaultMessage='Create a new bounty program'
          />
        </Link>
      </div>
    )
  }
}
