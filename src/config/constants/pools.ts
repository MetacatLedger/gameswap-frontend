import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
   {
    sousId: 2,
    tokenName: 'WMATIC',
    stakingTokenName: QuoteToken.STONKS,
    stakingTokenAddress: '0x1F1b5ce5fEDb6F27Db51C4d5e885d952f8371257',
    contractAddress: {
      97: '',
      56: '',
     137: '0x824C3FfAD5ee1bD781A248948Fb4007Fbc79Bd85'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://stonkz.farm/',
    harvest: true,
    tokenPerBlock: '.02604',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    message: '7 Day 7,000 MATIC Pool'
  }, 
  {
    sousId: 3,
    tokenName: 'WMATIC',
    stakingTokenName: QuoteToken.STONKS,
    stakingTokenAddress: '0x1F1b5ce5fEDb6F27Db51C4d5e885d952f8371257',
    contractAddress: {
      97: '',
      56: '',
     137: '0x94E75A48E4F958Fd9254194fb49E4999D7614DC9'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://stonkz.farm/',
    harvest: true,
    tokenPerBlock: '.0037202',
    sortOrder: 2,
    isFinished: false,
    tokenDecimals: 18,
    message: '7 Day 1,000 MATIC Pool'
  }, 
  // 0xd7FfD21c4ff197AFB01169BeB6681e5A406654Da
  {
    sousId: 4,
    tokenName: 'WMATIC',
    stakingTokenName: QuoteToken.STONKS,
    stakingTokenAddress: '0x1F1b5ce5fEDb6F27Db51C4d5e885d952f8371257',
    contractAddress: {
      97: '',
      56: '',
     137: '0xd639Fc3f1E75F05ABEDb83ff6B10e214b4ab3100'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://stonkz.farm/',
    harvest: true,
    tokenPerBlock: '.0031622',
    sortOrder: 2,
    isFinished: false,
    tokenDecimals: 18,
    message: '7 Day 850 MATIC Pool'
  }, 
]

export default pools
