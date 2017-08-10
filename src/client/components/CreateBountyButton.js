import React from 'react'
import bountyContracts from 'bounty-contracts'

export default () => {
  const onClickHandler = async () => {
    const { BugBounty, BugBountyFactory } = bountyContracts({
      web3: window.web3,
      from: window.web3.eth.accounts[0]
    })
    const bugBountyFactory = await BugBountyFactory.deployed()

    const createTx = await bugBountyFactory.createBugBounty(
      500,
      400,
      300,
      200,
      100,
      'asdflkjasdflkjadsf'
    )
    console.log('tx: ', createTx)
    const address = createTx.logs[0].args.bugBounty
    const bugBounty = await BugBounty.at(address)
    console.log('bugBounty: ', bugBounty)
    const state = await bugBounty.state()
    console.log(state.output())
  }

  return (
    <button onClick={onClickHandler}>CLICK ME</button>
  )
}
