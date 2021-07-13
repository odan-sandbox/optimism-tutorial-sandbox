import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@eth-optimism/hardhat-ovm";

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.7.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    optimistic: {
      url: "http://127.0.0.1:8545",
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
      },
      gasPrice: 15000000,
      ovm: true, // This sets the network as using the ovm and ensure contract will be compiled against that.
    },
  },
};
export default config;
