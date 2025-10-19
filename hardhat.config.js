import "dotenv/config";
import "@nomicfoundation/hardhat-ethers";

export default {
  solidity: {
    compilers: [
      { version: "0.8.20", settings: { optimizer: { enabled: true, runs: 200 } } }
    ]
  },
  networks: {
    hardhat: { type: "edr-simulated", chainId: 31337 },
    basesepolia: { type: "http", url: process.env.BASE_RPC_URL, accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [] }
  },
  paths: { sources: "./contracts", tests: "./test", cache: "./cache", artifacts: "./artifacts" }
};
