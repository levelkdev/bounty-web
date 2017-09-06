import React, { Component } from 'react'
import IPFSInfo from 'components/IPFSInfo'
import { inject } from 'mobx-react'
import css from './IPFS.scss'

@inject('IPFSInfoStore')
export default class IPFS extends Component {
  componentWillMount () {
    const { IPFSInfoStore } = this.props
    if (!IPFSInfoStore.initialized) {
      IPFSInfoStore.fetch()
    }
  }

  render () {
    return (
      <div className={css.ipfs}>
        <h1>IPFS Info</h1>
        <IPFSInfo />
      </div>
    )
  }
}
