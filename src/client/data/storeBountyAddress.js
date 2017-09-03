import _ from 'lodash'
import ipfs from './ipfsClient'

export default (address) => {
  return addBountyAddress(address).then((hash) => {
    return publishToIPNS(hash)
  })
}

function addBountyAddress (address) {
  return new Promise((resolve, reject) => {
    return getBountyAddresses().then((addresses) => {
      const newAddresses = _.compact(_.concat(address, addresses)).join(',')
      ipfs.add([Buffer.from(newAddresses)], (err, res) => {
        if (err) {
          reject(err)
        } else {
          const hash = res[0].hash
          resolve(hash)
        }
      })
    })
  })
}

function publishToIPNS (hash) {
  return new Promise((resolve, reject) => {
    ipfs.name.publish(`/ipfs/${hash}`, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

function getBountyAddresses () {
  return new Promise((resolve, reject) => {
    return ipnsResolvedHash().then((hash) => {
      ipfs.cat(hash, {buffer: true}, (err, res) => {
        if (err) {
          reject(err)
        } else {
          const addressesStr = res.toString()
          resolve(addressesStr ? addressesStr.split(',') : [])
        }
      })
    })
  })
}

function ipnsResolvedHash () {
  return new Promise((resolve, reject) => {
    return ipnsId().then((id) => {
      ipfs.name.resolve(id, (err, resp) => {
        if (err) {
          reject(err)
        } else {
          resolve(resp.Path)
        }
      })
    })
  })
}

function ipnsId () {
  return new Promise((resolve, reject) => {
    ipfs.id((err, resp) => {
      if (err) {
        reject(err)
      } else {
        resolve(resp.id)
      }
    })
  })
}
