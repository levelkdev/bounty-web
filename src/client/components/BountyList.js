import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import baseCSS from 'styles/base.scss'

export default inject('BountyListStore')(observer(props => {
  const { bounties } = props.BountyListStore
  
  const content = _.map(bounties, (bountyData, i) => {
    const { bountyAddress, title, description } = bountyData
    return (
      <div key={i}>
        <Link to={`/bounties/${bountyAddress}`}>{title}</Link>
        <div className={baseCSS.subheading}>{bountyAddress}</div>
        <div>{description}</div>
        <br />
      </div>
    )
  })

  return (
    <div>
      {content}
    </div>
  )
}))
