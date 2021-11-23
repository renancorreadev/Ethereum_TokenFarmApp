import { useMemo } from 'react'
import { useWeb3 } from '../hooks/useWeb3'
import ERC20_ABI from '../assets/abis/erc20Abi.json'
import ERC721_ABI from '../assets/abis/erc721Abi.json'
import ERC1155_ABI from '../assets/abis/erc1155Abi.json'
import TOKEN_ABI from '../assets/abis/DappToken.json'
import SHEEPSTAKE_ABI from '../assets/abis/TokenFarm.json'
import USDT_ABI from '../assets/abis/DaiToken.json'

const getContract = (abi, address, web3) => {
  if (web3) return new web3.eth.Contract(abi, address)
}

export const useContract = (abi, address) => {
  const { web3 } = useWeb3()
  return useMemo(() => getContract(abi, address, web3), [abi, address, web3])
}

export const useSheepStake = (address) => {
  const { web3 } = useWeb3()
  return useMemo(
    () =>
      getContract(SHEEPSTAKE_ABI.abi, SHEEPSTAKE_ABI.networks.address, web3),
    [web3],
  )
}

export const useUSDT = (address) => {
  const { web3 } = useWeb3()
  return useMemo(
    () => getContract(USDT_ABI.abi, USDT_ABI.networks.address, web3),
    [web3],
  )
}

export const useERC721 = (address) => {
  const { web3 } = useWeb3()
  return useMemo(() => getContract(ERC721_ABI, address, web3), [address, web3])
}

export const useToken = (address) => {
  const { web3 } = useWeb3()
  return useMemo(
    () => getContract(TOKEN_ABI.abi, TOKEN_ABI.abi.address, web3),
    [web3],
  )
}

export const useERC1155 = (address) => {
  const { web3 } = useWeb3()
  return useMemo(() => getContract(ERC1155_ABI, address, web3), [address, web3])
}

export const useERC20 = (address) => {
  const { web3 } = useWeb3()
  return useMemo(() => getContract(ERC20_ABI, address, web3), [address, web3])
}
