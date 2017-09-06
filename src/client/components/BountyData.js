import React from 'react'
import { inject, observer } from 'mobx-react'

export default inject('BountyListStore')(observer(props => {
  const { visibleBountyData } = props.BountyListStore

  if (visibleBountyData) {
    const {
      bountyAddress,
      balance,
      ipfsHash,
      title,
      description,
      verified
    } = visibleBountyData

    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>Balance: {balance}</p>
        <br /><br />
        <div>Contract Address: {bountyAddress}</div>
        <div>IPFS Hash: {ipfsHash}</div>
        <div>Verified: {verified}</div>
      </div>
    )
  } else {
    return (
      <div>LOADING...</div>
    )
  }
}))
