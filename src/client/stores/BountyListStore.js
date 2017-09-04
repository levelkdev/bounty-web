import { observable, action, computed } from 'mobx'
import { fromPromise, FULFILLED } from 'mobx-utils'
import contracts from 'eth/contracts'

class BountyListStore {
  @observable result = {}

  @action async fetch () {
    this.result = fromPromise(this.fetchBounties())
  }

  @computed get all () {
    if (this.result.state === FULFILLED) {
      return this.result.value
    }
    return []
  }

  async fetchBounties () {
    const { BugBountyFactory } = contracts()
    const bugBountyFactory = await BugBountyFactory.deployed()
    const arrLength = await bugBountyFactory.getBountiesCount.call()
    const results = []
    for (let i = 0; i < arrLength.toNumber(); i++) {
      results.push(await bugBountyFactory.bounties.call(i))
    }
    return results
  }
}

export default new BountyListStore()
