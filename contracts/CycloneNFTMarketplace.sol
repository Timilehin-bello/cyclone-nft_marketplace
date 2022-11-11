// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol"; // Keeps track of NFT item creation and sales
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";


// interface  ERC721URIStorage {
//     function inheritedFunction() external;
// }

contract CycloneNFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;
    
    address payable owner;
    
    uint256 listingPrice = 0.0022 ether;
    
    mapping (uint256=>MarketItem) private idMarketItem;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event idMarketItemCreated(
        uint256 indexed tokenId,
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Oops!, you are not authorized to change the listing price" );
    }

    constructor() ERC721("Cyclone NFT Token", "CNT") {
        owner == payable(msg.sender);
    }

    function updateListingPrice(uint256 _listingPrice) public payable onlyOwner{
        listingPrice = _listingPrice;
    }


