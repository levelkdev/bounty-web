import React, { Component } from 'react'
import { inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import BountyList from 'components/BountyList'
import css from './Home.scss'

@inject('BountyListStore')
export default class Home extends Component {
  componentWillMount () {
    const { BountyListStore } = this.props
    BountyListStore.fetch()
  }

  render () {
    return (
      <div className={css.home}>
        <Link to={'/new-bounty'}>
          <FormattedMessage
            id='NewBounty.createNewBounty'
            defaultMessage='[Create a new bounty program]'
          />
        </Link>

        <br /><br />
        <h2>Bounties</h2>
        <BountyList />
      </div>
    )
  }
}
