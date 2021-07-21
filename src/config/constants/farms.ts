import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // await CreatePool('0xcd7199ba48a75b8885cd3e916596472d1a5763b7', 1000, 1.5, 0) // 0 StonkS token 
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'STONKS',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x53565263dec7a2fab109f9b502792b8c80f70d42', // STONKShare - USDC
    },
    tokenSymbol: 'STONKS',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xcd7199ba48a75b8885cd3e916596472d1a5763b7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // await CreatePool('0x0652cf35852e8b56cda90e5da23ad32995b4fe96', 1000, 0, 0) // 1 StonkS-USDC 
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'STONKS-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x53565263dec7a2fab109f9b502792b8c80f70d42', // StonkS - USDC
    },
    tokenSymbol: 'STONKS',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xcd7199ba48a75b8885cd3e916596472d1a5763b7', // StonkS
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
