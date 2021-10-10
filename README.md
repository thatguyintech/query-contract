# So you found an NFT contract that's not verified on Etherscan...

and you want to know how the project manages it's off-chain metadata.

Well, you've come to the right place. Here's a script to print out your NFT's tokenURI.

1. install dependencies

```
npm install
```

2. if you don't already have a node provider account, set one up at https://www.alchemy.com/ for free

2. set your configs by renaming `.env-placeholder` to `.env` and then:
    1. set `API_URL` to your node provider URL, i.e. `https://eth-mainnet.alchemyapi.io/v2/12345`, make sure network is set to mainnet for public NFT projects.
    2. set `API_KEY` to your node provider api key, i.e. `12345` -- it's most likely a subset of the API_URL
    3. set `CONTRACT_ADDRESS` to the address you want to check out, i.e. `0x0cE87f77B1d83dF522AE96AF9Cf810B16AB0942B`

3. run the `interact.js` script with: `npx hardhat run interact.js --network mainnet`

you'll see some output that looks like this:

```
contract name:  GFT Authentic Digital Collectible
token uri https://gft-authentic-api.herokuapp.com/api/creature/15
```

that `token uri` is the location where the contract stores its metadata!

glhf