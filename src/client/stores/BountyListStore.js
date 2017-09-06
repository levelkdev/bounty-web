import { observable, action, computed } from 'mobx'
import _ from 'lodash'
import contracts from 'eth/contracts'
import BountyDataStore from './BountyDataStore'

class BountyListStore {
  @observable bounties = []
  @observable visibleBountyDataAddress

  @action async fetch () {
    await this.fetchBounties()
  }

  @action async setVisible (address) {
    this.visibleBountyDataAddress = address
    if (!this.findBountyData(address)) {
      await this.fetchBountyData(address)
    }
  }

  @computed get visibleBountyData () {
    return this.findBountyData(this.visibleBountyDataAddress)
  }

  async fetchBounties () {
    const { BugBountyFactory } = contracts()
    const bugBountyFactory = await BugBountyFactory.deployed()
    const arrLength = await bugBountyFactory.getBountiesCount.call()
    let address
    for (let i = 0; i < arrLength.toNumber(); i++) {
      address = await bugBountyFactory.bounties.call(i)
      await this.fetchBountyData(address)
    }
  }

  @action async fetchBountyData (address) {
    if (!this.findBountyData(address)) {
      const bountyData = new BountyDataStore()
      this.bounties.push(bountyData)
      await bountyData.fetch(address)
    }
  }

  findBountyData (address) {
    return _.find(this.bounties, bountyData => bountyData.bountyAddress === address)
  }
}

export default new BountyListStore()
