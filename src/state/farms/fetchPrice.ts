import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import farmsConfig from 'config/constants/farms'
import { QuoteToken } from '../../config/constants/types'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const lpAddress = '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
    const wMaticAddress = '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
    const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
    const calls = [
      // Balance of wmatic token in the LP contract
      {
        address: wMaticAddress,
        name: 'balanceOf',
        params: [lpAddress],
      },
      // Balance of quote token on LP contract
      {
        address: usdcAddress,
        name: 'balanceOf',
        params: [lpAddress],
      },
      // Token decimals
      {
        address: wMaticAddress,
        name: 'decimals',
      },
      // Quote token decimals
      {
        address: usdcAddress,
        name: 'decimals',
      },
    ]

// @Hack gets Wmatic price without having farm pari
const getWMaticPrice = async () => {
  const data = await Promise.resolve(
     async () => {
      const [
        tokenBalanceLP,
        quoteTokenBlanceLP,
        tokenDecimals,
        quoteTokenDecimals
      ] = await multicall(erc20, calls)
      
      const tokenValue = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals));
      const quoteTokenValue = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(10).pow(quoteTokenDecimals));
      const tokenPriceValue = quoteTokenValue.div(tokenValue);
      // console.log(`WMatic quoteTokenValue: ${quoteTokenValue} / tokenBalanceLP: ${tokenValue} = ${tokenPriceValue}`)
      return (tokenValue.toNumber())
    }
  )
  return data;
}


export default getWMaticPrice