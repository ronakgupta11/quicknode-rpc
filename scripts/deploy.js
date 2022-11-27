const {ethers} = require("hardhat");

async function main(){
  const votingContract = await ethers.getContractFactory("Voting");

  const votingContractDeployed = await votingContract.deploy()

  await votingContractDeployed.deployed()

  console.log("contract deployed at:",votingContractDeployed.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });