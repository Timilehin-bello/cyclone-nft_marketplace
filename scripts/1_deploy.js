async function main() {
  // Fetch contract to deploy
  const CycloneNFTMarketplace = await ethers.getContractFactory(
    "CycloneNFTMarketplace"
  );

  // Deply contract
  const cycloneNftMarketplace = await CycloneNFTMarketplace.deploy();
  await cycloneNftMarketplace.deployed();
  console.log(`NFT contract Deployed to ${cycloneNftMarketplace.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
