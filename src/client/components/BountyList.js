import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

export default inject('BountyListStore')(observer(props => {
  const { all } = props.BountyListStore

  const bountyLinks = _.map(all, (bountyAddress, i) => {
    return (
      <div key={i}>
        <Link to={`/bounties/${bountyAddress}`}>{bountyAddress}</Link>
      </div>
    )
  })

  return (
    <div>
      {bountyLinks}
    </div>
  )
}))
