require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://172.27.96.1:7545"
    },
    hardhat: {
    },
  },
};