require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-etherscan');


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/a9a70201ce3a431e8b9c657b4c2d8827`,
      chainId: 1,
      accounts: [`0x627b543d5795cbff8da29546aef53d24b02d0d39aa5450dccf3e135a1b242bc8`],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/a9a70201ce3a431e8b9c657b4c2d8827`,
      chainId: 4,
      accounts: [`0x627b543d5795cbff8da29546aef53d24b02d0d39aa5450dccf3e135a1b242bc8`],
      allowUnlimitedContractSize: true
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  etherscan: {
    apiKey: 'MVIWUAUKWBYGE9DXAGT1EAZ6EZMCUQRU6F',
  },
  solidity: {
    version: "0.8.3"
  }
};