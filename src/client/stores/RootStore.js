import { observable } from 'mobx'

class RootStore {
  @observable showMessage = true
}

export default new RootStore()
