import React from 'react'
import Hello from 'components/Hello'
import css from './Home.scss'

export default () => {
  return (
    <div className={css.home}>
      <Hello />
    </div>
  )
}
