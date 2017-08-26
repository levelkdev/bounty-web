import React from 'react'
import { inject, observer } from 'mobx-react'

export default inject('IPFSInfoStore')(observer(props => {
  const { IPFSInfoStore } = props

  if (IPFSInfoStore.result.state === 'pending') {
    return <div>LOADING...</div>
  } else if (IPFSInfoStore.error) {
    return (
      <div>Could not connect to IPFS</div>
    )
  } else {
    const addresses = IPFSInfoStore.addresses && IPFSInfoStore.addresses.map((address) => {
      return (
        <div key={address}>{address}</div>
      )
    })

    const ipfsProps = [
      'addresses',
      'agentVersion',
      'id',
      'protocolVersion',
      'publicKey'
    ]

    const renderIPFSPropVal = (prop) => {
      if (prop === 'addresses') {
        return addresses
      } else {
        return IPFSInfoStore[prop]
      }
    }

    const rows = ipfsProps.map((prop) => {
      return (
        <tr key={prop}>
          <td>{prop}</td>
          <td>{renderIPFSPropVal(prop)}</td>
        </tr>
      )
    })

    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}))
