import { useToken, useERC20, useSheepStake } from './useContract'
import { useState, useEffect } from 'react'
import { useWeb3 } from '../hooks/useWeb3'
import BigNumber from 'bignumber.js'
import { ZERO_ADDRESS, MAX_UINT } from '../constants/constants'
import { STATE } from '../constants/enums'
import DAPPTOKEN_ABI from '../assets/abis/DappToken.json'
import TOKENFARM_ABI from '../assets/abis/TokenFarm.json'

export const ZERO_BALANCE = new BigNumber(0)

export const useSheepStake = (SheepAddress, amount) => {
  const [amount, setAmount] = useState(undefined)
  const sheepAddress = '0xedb604c1a6cae004f78b33e821ed0ff9175bd6c2'
  const TokenFarmAddress = '0xb3D1CEaee4b5644A4D3103DA9958a56a2d260E9c'
  const [stakedBalance, setStakedBalance] = useState(ZERO_BALANCE)
  const [stakeState, setStakeState] = useState(STATE.IDLE)
  const [isStaked, setIsStaked] = useState(false)

  const { account, connected } = useWeb3()
  const Disconnect = connected === false
  const TokenFarmContract = useSheepStake(TokenFarmAddress, TOKENFARM_ABI)
  const SheepTokenContract = useToken(sheepAddress, DAPPTOKEN_ABI.abi)

  const fetchStakeBalance = async () => {
    if (TokenFarmContract === ZERO_ADDRESS) {
      setIsStaked(true)
      return
    }
    try {
      const bal = await SheepTokenContract.methods
        .allowance(account, toApprove)
        .call()
      const approveStake = new BigNumber(bal)
      setStakedBalance(approveStake)
      setIsStaked(
        approveStake.gte(
          new BigNumber(requiredApprovedBalance ? requiredApprovedBalance : 1),
        ),
      )
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    if (account && TokenFarmContract) {
      fetchStakeBalance()
    }
  }, [account, TokenFarmContract])

  const stake = async () => {
    try {
      setStakeState(STATE.BUSY)
      TokenFarmContract.options.address =
        '0xb3D1CEaee4b5644A4D3103DA9958a56a2d260E9c'

      await TokenFarmContract.methods
        .stakeTokens(amount)
        .send({ from: account })
        .on('transactionHash', (hash) => {
          Disconnect
        })
      await fetchStakeBalance()

      setStakeState(STATE.SUCCEED)
    } catch (e) {
      console.log(e)
      setStakeState(STATE.FAILED)
    }
  }

  return { stakedBalance, isStaked, stakeState, stake }
}
