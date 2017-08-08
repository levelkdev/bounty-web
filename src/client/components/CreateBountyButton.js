import React from 'react'
import { BugBountyFactory } from 'bounty-contracts'

export default () => {
  const onClickHandler = async () => {
    const bb = await BugBountyFactory.new(
      500,
      400,
      300,
      200,
      100,
      'asdflkjasdflkjadsf'
    )
    console.log('bb: ', bb)
  }

  return (
    <button onClick={onClickHandler}>CLICK ME</button>
  )
}
