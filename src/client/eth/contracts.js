import bountyContracts from 'bounty-contracts'

export default () => {
  return bountyContracts({
    web3: window.web3,
    from: window.web3.eth.accounts[0]
  })
}
