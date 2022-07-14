import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.6.12"
      },
      {
        version: "0.4.24",
      }
    ],
    overrides: {
      "contracts/FiatTokenV2_1.sol": {
        version: "0.6.12",
      },
      "contracts/MasterMinter.sol": {
        version: "0.4.24",
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        url: process.env.MAINNET_RPC_URL!,
        blockNumber: 14561796
      },
      allowUnlimitedContractSize: true
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  }
};

export default config;
