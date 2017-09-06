import { observable, action, computed } from 'mobx'
import { fromPromise, FULFILLED } from 'mobx-utils'
import contracts from 'eth/contracts'
import getBountyData from 'data/getBountyData'

class BountyDataStore {
  @observable bountyAddress
  @observable contractResult = {}
  @observable metadataResult = {}
  @observable verifyResult = {}

  @action async fetch (address) {
    this.bountyAddress = address
    this.contractResult = fromPromise(this.fetchContract(address))
    return this.contractResult.then(() => {
      this.metadataResult = fromPromise(getBountyData(this.ipfsHash))
      return this.metadataResult
    }).then(() => {
      this.verifyResult = fromPromise(this.verifyBounty(address))
      return this.verifyResult
    })
  }

  @action clear () {
    this.bountyAddress = undefined
    this.contractResult = {}
    this.metadataResult = {}
  }

  @computed get contractProps () {
    if (this.contractResult.state === FULFILLED) {
      return this.contractResult.value.props
    }
  }

  @computed get ipfsHash () {
    return this.contractProps ? window.web3.toAscii(this.contractProps.ipfsHash) : undefined
  }

  @computed get metadata () {
    if (this.metadataResult.state === FULFILLED) {
      return this.metadataResult.value || {}
    }
    return {}
  }

  @computed get title () {
    return this.metadata.title
  }

  @computed get description () {
    return this.metadata.description
  }

  @computed get verified () {
    if (this.verifyResult.state === FULFILLED) {
      return this.verifyResult.value ? 'True' : 'False'
    }
  }

  async fetchContract (address) {
    const { BugBounty } = contracts()
    const bounty = await BugBounty.at(address)
    const state = await bounty.state()
    return state
  }

  async verifyBounty (address) {
    const { BugBountyFactory } = contracts()
    const bountyFactory = await BugBountyFactory.deployed()
    const verified = await bountyFactory.verifyBounty.call(address)
    return verified
  }
}

export default BountyDataStore
