import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import dotenv from 'dotenv'

dotenv.config()

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY as string
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY as string

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
}

export default config
