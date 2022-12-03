const { ethers } = require("hardhat");
const { expect } = require("chai");

const convertToBigNum = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("CycloneNFTMarketplace", () => {
  let cycloneNftMarketplace, accounts;

  beforeEach(async () => {
    // Fetch Token from Blochchain
    const CycloneNFTMarketplace = await ethers.getContractFactory(
      "CycloneNFTMarketplace"
    );

    // Deply contract
    cycloneNftMarketplace = await CycloneNFTMarketplace.deploy();
    accounts = await ethers.getSigners();
    deployer = accounts[0];
    receiver = accounts[1];
  });

  describe("Deployment", () => {
    const name = "Cyclone NFT";
    const symbol = "CNT";
    const listingPrice = 0.002;

    it("has a name", async () => {
      // Read Token Name and Check that name is correct
      expect(await cycloneNftMarketplace.name()).to.equal(name);
    });

    it("has a symbol", async () => {
      // Read Token Name and Check that name is correct
      expect(await cycloneNftMarketplace.symbol()).to.equal(symbol);
    });

    it("has a listing price ", async () => {
      expect(await cycloneNftMarketplace.getListingPrice()).to.equal(
        convertToBigNum(listingPrice)
      );
    });
  });

  describe("Update Listing Price", () => {
    let amount, transaction, result;

    beforeEach(async () => {
      amount = convertToBigNum(0.005);

      transaction = await cycloneNftMarketplace
        .connect(deployer)
        .updateListingPrice(amount);

      result = await transaction.wait();
    });

    it("has been updated", async () => {
      expect(await cycloneNftMarketplace.getListingPrice()).to.equal(amount);
    });

    it("has been reverted", async () => {
      expect(cycloneNftMarketplace.connect(receiver).updateListingPrice(amount))
        .to.reverted;
    });
  });

  // describe("Marketplace Tokens", async () => {
  //   let amount, transaction, result, tokenURI, price, createToken;
  //   it("token create", async () => {
  //     // beforeEach(() => async () => {
  //     amount = convertToBigNum(0.01);
  //     amount = tokenURI = "https://unsplash.com/photos/mIg0GL63lFk";
  //     price = convertToBigNum(0.002);

  //     // });
  //     createToken = await cycloneNftMarketplace
  //       .connect(deployer)
  //       .createToken(tokenURI, price, { value: amount });
  //     // console.log(createToken);
  //   });
  // });
});
