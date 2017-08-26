import { observable, action, computed } from 'mobx'
import { fromPromise, REJECTED } from 'mobx-utils'
import ipfsAPI from 'ipfs-api'

const ipfs = ipfsAPI('localhost', '5001')

class IPFSInfoStore {
  @observable result

  @action fetch () {
    this.result = fromPromise(new Promise((resolve, reject) => {
      ipfs.id((err, resp) => {
        if (err) {
          reject(err)
          console.error('Cannot connect to IPFS: ', err)
        } else {
          resolve(resp)
        }
      })
    }))
  }

  @computed get initialized () {
    return this.result && this.result.state
  }

  @computed get addresses () {
    return this.respProp('addresses')
  }

  @computed get agentVersion () {
    return this.respProp('agentVersion')
  }

  @computed get id () {
    return this.respProp('id')
  }

  @computed get protocolVersion () {
    return this.respProp('protocolVersion')
  }

  @computed get publicKey () {
    return this.respProp('publicKey')
  }

  @computed get error () {
    if (this.result.state === REJECTED) {
      return this.result.value
    }
  }

  respProp (key) {
    return this.result && this.result.value && this.result.value[key]
  }
}

export default new IPFSInfoStore()
