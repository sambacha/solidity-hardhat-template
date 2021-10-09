/**
 * @package solidity-hardhat-template
 * @file hardhat configuration
 * @version 1.1.0
 * @type import('hardhat/config').HardhatUserConfig
 */

import { HardhatUserConfig } from 'hardhat/types';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';

import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-solhint';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig({ path: resolve(__dirname, './.env') });

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || '';
const INFURA_API_KEY = process.env.INFURA_API_KEY || '';
const ALCHEMY_KEY = process.env.ALCHEMY_KEY || '';
const RINKEBY_RPC_URL =
  process.env.RINKEBY_RPC_URL ||
  'https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_KEY}';
const MAINNET_RPC_URL =
  process.env.MAINNET_RPC_URL ||
  'https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}';

const MNEMONIC =
  process.env.MNEMONIC ||
  'test test test test test test test test test test test junk';
// const PRIVATE_KEY = process.env.PRIVATE_KEY || "your private key";

const config: HardhatUserConfig = {
  solidity: {
    version: '0.6.12',
    settings: {
      metadata: {
        bytecodeHash: 'none',
      },
      optimizer: {
        enabled: false,
        runs: 200,
        details: {
          yul: false,
        },
      },
    },
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  paths: {
    sources: './src',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      forking: {
        url: MAINNET_RPC_URL,
      },
    },
    localhost: {},
    rinkeby: {
      url: RINKEBY_RPC_URL,
      // accounts: [PRIVATE_KEY],
      accounts: {
        mnemonic: MNEMONIC,
      },
      saveDeployments: true,
    },
    ganache: {
      url: 'http://localhost:8545',
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
