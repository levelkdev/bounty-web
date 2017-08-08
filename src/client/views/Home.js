import React from 'react'
import CreateBountyButton from 'components/CreateBountyButton'
import Hello from 'components/Hello'
import css from './Home.scss'

export default () => {
  return (
    <div className={css.home}>
      <CreateBountyButton />
      <Hello />
    </div>
  )
}
