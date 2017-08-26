import { observable, action } from 'mobx'

class CreateBountyFormStore {
  @observable title = ''
  @observable description = ''

  @action updateTitle (title) {
    this.title = title
  }

  @action updateDescription (description) {
    this.description = description
  }
}

export default new CreateBountyFormStore()
