import BigNumber from 'bignumber.js'
import { useEffect, useState } from 'react'
import { toLower } from '../utils/utils'
import { useToken, useUSDT, useSheepStake } from './useContract'
import { useRefresh } from './useRefresh'
import { useWeb3 } from './useWeb3'
import DAPP_TOKEN_ABI from '../assets/abis/DappToken.json'
import DAITOKEN_ABI from '../assets/abis/DaiToken.json'
import TOKENFARM_ABI from '../assets/abis/TokenFarm.json'

const sheepAddress = '0x98f913f216c58de3cc5b7f470ec09ce7b1e81082500'
const usdtAddress = '0x382608beaa6264b4b93f983c22ff3b213252f698'
const farmAddress = '0x59590A5F5E7717BE08c0D381D0E7B32d808A64fc'

export const useTokenBalance = (address, decimals = '9') => {
  const contract = useToken(sheepAddress, DAPP_TOKEN_ABI.abi)
  const [balance, setBalance] = useState(undefined)
  const [displayBalance, setDisplayBalance] = useState(undefined)
  const { fastRefresh } = useRefresh()

  const { account } = useWeb3()

  useEffect(() => {
    const fetch = async () => {
      contract.options.address = sheepAddress
      const bal = await contract.methods.balanceOf(account).call()
      setBalance(new BigNumber(bal))
      setDisplayBalance(toLower(bal, decimals).toNumber())
    }
    if (contract) {
      fetch()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract, fastRefresh])

  return { balance, displayBalance }
}
//DAI TOKEN = USD
export const useUSDTbalance = (address, decimals = '18') => {
  const contract = useUSDT(usdtAddress, DAITOKEN_ABI.abi)
  const [balance, setBalance] = useState(undefined)
  const [usdBalance, setUsdBalance] = useState(undefined)
  const { fastRefresh } = useRefresh()
  const { account } = useWeb3()

  useEffect(() => {
    const fetch = async () => {
      contract.options.address = usdtAddress
      const bal = await contract.methods.balanceOf(account).call()
      setBalance(new BigNumber(bal))
      setUsdBalance(toLower(bal, decimals).toNumber())
    }
    if (contract) {
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract, fastRefresh])

  return { balance, usdBalance }
}

export const useStakeBalance = (address, decimals = '9') => {
  const contract = useSheepStake(farmAddress, TOKENFARM_ABI.abi)
  const [balance, setBalance] = useState(undefined)
  const [stakeBalance, setStakeBalance] = useState(undefined)

  const { fastRefresh } = useRefresh()

  const { account } = useWeb3()

  useEffect(() => {
    const fetch = async () => {
      contract.options.address = farmAddress
      const bal = await contract.methods.stakingBalance(account).call()
      setBalance(new BigNumber(bal))
      setStakeBalance(toLower(bal, decimals).toNumber())
    }
    if (contract) {
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract, fastRefresh])

  return { balance, stakeBalance }
}
