import ipfs from './ipfsClient'

export default (bountyData) => {
  return new Promise((resolve, reject) => {
    ipfs.add([Buffer.from(JSON.stringify(bountyData))], (err, res) => {
      if (err) {
        reject(err)
      } else {
        const hash = res[0].hash
        resolve(hash)
      }
    })
  })
}
