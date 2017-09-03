import React from 'react'
import { inject, observer } from 'mobx-react'
import formCss from 'styles/form.scss'

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
    CreateBountyFormStore.createBugBounty(
      500,
      400,
      300,
      200,
      100,
      title,
      description
    )
  }

  return (
    <div className={formCss.form}>
      <div className={formCss.fieldGroup}>
        <div>Title</div>
        <input onChange={onTitleChangeHandler} value={title} />
      </div>
      <div className={formCss.fieldGroup}>
        <div>Description</div>
        <input onChange={onDescriptionChangeHandler} value={description} />
      </div>
      <button onClick={onClickHandler}>Submit</button>
    </div>
  )
}))
