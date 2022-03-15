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
/**
 * @note
 * Before version 0.8.6 omitting the 'enabled' key was not equivalent to setting
 * it to false and would actually disable all the optimizations.
 * @see: {@link https://docs.soliditylang.org/en/latest/using-the-compiler.html#compiler-input-and-output-json-description}
 * 
 */

solidity: {
    version: '0.8.10',
    settings: {
        metadata: {
            bytecodeHash: 'none',
        },
        optimizer: {
            enabled: true,
            runs: 200,
            details: {
                yul: false,
            },
        },
        outputSelection: {
            "*": {
                "*": [
                    "abi",
                    "evm.bytecode",
                    "evm.deployedBytecode",
                    "evm.methodIdentifiers",
                    "metadata",
                ],
                "": ["ast"],
            },
        },
    },
},
 paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
    typechain: {
        outDir: 'types/',
        target: 'ethers-v5',
    },
};

// @note Compiler output configuration for verifying on Sourceify
export const defaultSolcOutputSelection = {
    "*": {
        "*": [
            "abi",
            "evm.bytecode",
            "evm.deployedBytecode",
            "evm.methodIdentifiers",
            "metadata",
        ],
        "": ["ast"],
    },
};

export default config;
