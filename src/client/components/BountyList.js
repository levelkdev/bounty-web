import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

export default inject('BountyListStore')(observer(props => {
  const { all, error, isFetching } = props.BountyListStore
  let content

  if (isFetching) {
    content = <div>LOADING...</div>
  } else if (error) {
    content = <div>{error}</div>
  } else if (all && all.length > 0) {
    content = _.map(all, (bountyAddress, i) => {
      return (
        <div key={i}>
          <Link to={`/bounties/${bountyAddress}`}>{bountyAddress}</Link>
        </div>
      )
    })
  } else {
    return <div>No bounties found</div>
  }

  return (
    <div>
      {content}
    </div>
  )
}))
