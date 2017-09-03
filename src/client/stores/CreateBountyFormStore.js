import { observable, action } from 'mobx'
import contracts from 'eth/contracts'
import storeBountyAddress from 'data/storeBountyAddress'
import storeBountyData from 'data/storeBountyData'

class CreateBountyFormStore {
  @observable title = ''
  @observable description = ''

  @action updateTitle (title) {
    this.title = title
  }

  @action updateDescription (description) {
    this.description = description
  }

  @action async createBugBounty (p1, p2, p3, p4, p5, title, description) {
    const { BugBounty, BugBountyFactory } = contracts()
    const bugBountyFactory = await BugBountyFactory.deployed()

    const ipfsDataHash = await storeBountyData({ title, description })
    console.log('BOUNTY DATA STORED AT: ', ipfsDataHash)

    const createTx = await bugBountyFactory.createBugBounty(
      p1,
      p2,
      p3,
      p4,
      p5,
      ipfsDataHash,
      'abc123' // TODO: generate hash of code
    )
    const address = createTx.logs[0].args.bugBounty
    const bugBounty = await BugBounty.at(address)
    console.log('bugBounty: ', bugBounty)
    const state = await bugBounty.state()
    const stateOutput = state.output()
    console.log(stateOutput)

    const storeRes = await storeBountyAddress(address)
    console.log('STORE RES: ', storeRes)
  }
}

export default new CreateBountyFormStore()
