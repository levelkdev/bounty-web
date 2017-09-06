import React from 'react'
import { inject, observer } from 'mobx-react'

export default inject('BountyDataStore')(observer(props => {
  const {
    bountyAddress,
    ipfsHash,
    title,
    description,
    verified
  } = props.BountyDataStore

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <br /><br />
      <div>Contract Address: {bountyAddress}</div>
      <div>IPFS Hash: {ipfsHash}</div>
      <div>Verified: {verified}</div>
    </div>
  )
}))
