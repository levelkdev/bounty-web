import React from 'react'
import { inject, observer } from 'mobx-react'
import contracts from 'eth/contracts'

export default inject('CreateBountyFormStore')(observer(props => {

  const { CreateBountyFormStore } = props
  const { title, description } = CreateBountyFormStore

  const onTitleChangeHandler = (evt) => {
    CreateBountyFormStore.updateTitle(evt.target.value)
  }

  const onDescriptionChangeHandler = (evt) => {
    CreateBountyFormStore.updateDescription(evt.target.value)
  }

  const onClickHandler = async () => {
    const { BugBounty, BugBountyFactory } = contracts()
    const bugBountyFactory = await BugBountyFactory.deployed()

    const createTx = await bugBountyFactory.createBugBounty(
      500,
      400,
      300,
      200,
      100,
      title
    )
    console.log('tx: ', createTx)
    const address = createTx.logs[0].args.bugBounty
    const bugBounty = await BugBounty.at(address)
    console.log('bugBounty: ', bugBounty)
    const state = await bugBounty.state()
    console.log(state.output())
  }

  return (
    <div>
      <input onChange={onTitleChangeHandler} value={title} />
      <input onChange={onDescriptionChangeHandler} value={description} />
      <button onClick={onClickHandler}>Submit</button>
    </div>
  )
}))
