const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { dLand_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the dLand NFT contract that you deployed in the previous module
  const dLandNFTContract = dLand_NFT_CONTRACT_ADDRESS;

  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so dldsTokenContract here is a factory for instances of our dldToken contract.
  */
  const dldTokenContract = await ethers.getContractFactory("dldToken");

  // deploy the contract
  const deployedDLDTokenContract = await dldTokenContract.deploy(dLandNFTContract);

  // print the address of the deployed contract
  console.log(
    "DLD Token Contract Address:",
    deployedDLDTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });