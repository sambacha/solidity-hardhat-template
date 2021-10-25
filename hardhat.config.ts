/**
 * @package solidity-hardhat-template
 * @file hardhat configuration
 * @version 1.1.0
 * @type import('hardhat/config').HardhatUserConfig
 */
import '@typechain/hardhat';
import 'dotenv/config';
import { HardhatUserConfig } from 'hardhat/types';

const mnemonic = 'test test test test test test test test test test test junk';

const config: HardhatUserConfig = {
  solidity: {
    
    version: '0.7.4',
    settings: {
      metadata: {
        bytecodeHash: 'none',
      },
      optimizer: {
     // WARNING: Before version 0.8.6 omitting the 'enabled' key was not equivalent to setting
     // it to false and would actually disable all the optimizations.
     // see: https://docs.soliditylang.org/en/latest/using-the-compiler.html#compiler-input-and-output-json-description
        enabled: true,
        runs: 200,
        details: {
          yul: false,
        },
      },
    },
  },
  typechain: {
    outDir: 'src/',
    target: 'ethers-v5',
  },
};

export default config;
