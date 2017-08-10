import React from 'react'
import contracts from 'eth/contracts'

export default () => {
  const onClickHandler = async () => {
    const { BugBounty, BugBountyFactory } = contracts()
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
