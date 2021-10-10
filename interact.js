const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const API_KEY = process.env.API_KEY;
const TOKEN_ID = process.env.TOKEN_ID;
const { ethers } = require("hardhat");

const contractAbi = JSON.parse(`[
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]`);

const provider = new ethers.providers.AlchemyProvider(network="mainnet", apiKey = API_KEY);
const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, provider);

async function main() {
    const name= await contract.name();
    console.log("contract name: ", name);

    const uri = await contract.tokenURI(TOKEN_ID);
    console.log("token uri", uri);
}

main();