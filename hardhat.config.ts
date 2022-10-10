// @ts-check
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

/**
 * @package solidity-hardhat-template
 * @filename hardhat.config.ts
 * @file hardhat configuration
 * @version 1.6.0
 */

import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-ethers';
import '@typechain/hardhat';
import 'dotenv/config';
import { HardhatUserConfig } from 'hardhat/types';

const test_mnemonic = 'test test test test test test test test test test test junk';

const config: HardhatUserConfig = {
/**
* @note Before version 0.8.6 omitting the 'enabled' key was not equivalent to setting 
*   it to false and would actually disable all the optimizations.
* @see: {@link https://docs.soliditylang.org/en/latest/using-the-compiler.html#compiler-input-and-output-json-description}
*/
solidity: {
    version: '0.8.17',
    settings: {
      metadata: {
        bytecodeHash: 'none',
      },
      viaIr: true,
      optimizer: {
        enabled: true,
        runs: 4_294_967_295,
        details: {
          yul: true,
        },
      },
      outputSelection: {
        '*': {
          '*': [
            'abi',
            'evm.bytecode',
            'evm.deployedBytecode',
            'evm.methodIdentifiers',
            'metadata',
            'evm.assembly',
            'irOptimized'
          ],
          '': ['ast'],
        },
      },
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.GOERLI_RPC}`,
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  typechain: {
    outDir: 'types/',
    target: 'ethers-v5',
  },
};

/** @note Compiler output configuration for verifying on Sourceify */
export const defaultSolcOutputSelection = {
  '*': {
    '*': [
      'abi',
      'evm.bytecode',
      'evm.deployedBytecode',
      'evm.methodIdentifiers',
      'metadata',
    ],
    '': ['ast'],
  },
};

export default config;
