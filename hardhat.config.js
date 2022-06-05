//require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
/*task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//module.exports = {
  //solidity: "0.8.4",
/*};*/

require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path: ".env"});

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

module.exports =  {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/1EVYynVZ7R8ECoMWH4R4o71CuAz6TWeK",
      accounts: ["55af77961b3a161d1451e42e8246f5ddd400eea51831e043074bb54bffb3b76c"],
    },
  },
};





