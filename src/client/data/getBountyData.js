import ipfs from './ipfsClient'

export default (hash) => {
  return new Promise((resolve, reject) => {
    ipfs.cat(`/ipfs/${hash}`, {buffer: true}, (err, res) => {
      let dataErr, data
      let resStr = ''
      if (err) {
        reject(err)
      } else if (!res) {
        dataErr = true
      } else {
        try {
          resStr = res.toString()
          data = JSON.parse(resStr)
        } catch (err) {
          dataErr = true
        }
      }
      if (dataErr) {
        reject(new Error(`Error getting bounty data: ${resStr} is not valid a valid JSON object`))
      } else {
        resolve(data)
      }
    })
  })
}
