import React from 'react'
import { BugBountyFactory } from 'bounty-contracts'

export default () => {
  const onClickHandler = () => {
    console.log('BugBountyFactory: ', BugBountyFactory)
  }

  return (
    <button onClick={onClickHandler}>CLICK ME</button>
  )
}
