import { useERC20, useSheepStake, useToken } from './useContract'
import { useState, useCallback } from 'react'
import { useWeb3 } from '../hooks/useWeb3'
import BigNumber from 'bignumber.js'
import { ZERO_ADDRESS } from '../constants/constants'
import { STATE } from '../constants/enums'
import TokenFarm_ABI from '../assets/abis/TokenFarm.json'
import CoinToken from '../assets/abis/DappToken.json'

export const ZERO_BALANCE = new BigNumber(0)
const sheepAddress = '0x98f913f216c58de3cc5b7f470ec09ce7b1e81082'
const farmAddress = '0x59590A5F5E7717BE08c0D381D0E7B32d808A64fc'

export const useERC20Approval = (requiredApprovedBalance) => {
  const contractCoinToken = useToken(sheepAddress, CoinToken.abi)
  const ContractFarm = useSheepStake(farmAddress, TokenFarm_ABI.abi)

  const toApprove = farmAddress

  const [approvedBalance, setApprovedBalance] = useState(ZERO_BALANCE)
  const [approveState, setApproveState] = useState(STATE.IDLE)
  const [isApproved, setIsApproved] = useState(false)

  const { account } = useWeb3()
  const token = useERC20(sheepAddress, CoinToken.abi)

  const fetchApprovedBalance = useCallback(async () => {
    if (sheepAddress === ZERO_ADDRESS) {
      setIsApproved(true)
      return
    }
    try {
      const bal = await token.methods.allowance(account, toApprove).call()
      const approveBal = new BigNumber(bal)
      setApprovedBalance(approveBal)
      setIsApproved(
        approveBal.gte(
          new BigNumber(requiredApprovedBalance ? requiredApprovedBalance : 1),
        ),
      )
    } catch (e) {
      console.log(e)
    }
  }, [account, token, toApprove, requiredApprovedBalance])

  const approve = async (amount) => {
    try {
      setApproveState(STATE.BUSY)
      contractCoinToken.options.address = sheepAddress
      ContractFarm.options.address = farmAddress

      await contractCoinToken.methods
        .approve(farmAddress, amount)
        .send({ from: account })
        .on('transactionHash', (hash) => {})

      await ContractFarm.methods
        .stakeTokens(amount)
        .send({ from: account })
        .on('transactionHash', (hash) => {})

      await fetchApprovedBalance()

      setApproveState(STATE.SUCCEED)
    } catch (e) {
      console.log(e)
      setApproveState(STATE.FAILED)
    }
  }

  const unstake = async () => {
    try {
      setApproveState(STATE.BUSY)

      ContractFarm.options.address = farmAddress

      await ContractFarm.methods
        .unstakeTokens()
        .send({ from: account })
        .on('transactionHash', (hash) => {})

      await fetchApprovedBalance()

      setApproveState(STATE.SUCCEED)
    } catch (e) {
      console.log(e)
      setApproveState(STATE.FAILED)
    }
  }

  const Rewards = async () => {
    try {
      setApproveState(STATE.BUSY)

      ContractFarm.options.address = farmAddress

      await ContractFarm.methods
        .issueTokens()
        .send({ from: account })
        .on('transactionHash', (hash) => {})

      await fetchApprovedBalance()

      setApproveState(STATE.SUCCEED)
    } catch (e) {
      console.log(e)
      setApproveState(STATE.FAILED)
    }
  }
  return {
    approvedBalance,
    isApproved,
    approveState,
    approve,
    unstake,
    Rewards,
  }
}
