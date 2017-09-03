import React, { Component } from 'react'
import { inject } from 'mobx-react'
import BountyData from 'components/BountyData'

@inject('BountyDataStore')
export default class Bounty extends Component {
  componentWillMount () {
    const { BountyDataStore } = this.props
    const bountyAddress = this.props.match.params.address
    BountyDataStore.fetch(bountyAddress)
  }

  render () {
    return (
      <div>
        <BountyData />
      </div>
    )
  }
}
