import React, { Component } from 'react'
import { inject } from 'mobx-react'
import BountyData from 'components/BountyData'

@inject('BountyListStore')
export default class Bounty extends Component {
  componentWillMount () {
    const { BountyListStore } = this.props
    const bountyAddress = this.props.match.params.address
    BountyListStore.setVisible(bountyAddress)
  }

  render () {
    return (
      <div>
        <BountyData />
      </div>
    )
  }
}
