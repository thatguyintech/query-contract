/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL } = process.env;

module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "ropsten",
   networks: {
      mainnet: {
         url: API_URL
      }
   },
}