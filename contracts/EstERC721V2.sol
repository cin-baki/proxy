// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract EstERC721V2 is Initializable, ERC721Upgradeable, UUPSUpgradeable, OwnableUpgradeable {
	uint256 public tokenIdPointer;
	address payable public FeeReceive;
	string _tokenUri;
	event Minted(
        uint256 tokenId,
        address beneficiary,
        string tokenUri,
        address minter
    );
    function initialize() initializer public {
      __ERC721_init("DANG", "DANG");
      __Ownable_init();
      __UUPSUpgradeable_init();
      FeeReceive = payable(msg.sender);
    }

    function mint(address _beneficiary) external payable returns (uint256) {
    	require(msg.value >= 200, "Insufficient funds to mint.");
    	tokenIdPointer = tokenIdPointer + 1;
        uint256 tokenId = tokenIdPointer;
    	_safeMint(_beneficiary, tokenId);
    	FeeReceive.transfer(msg.value);
    	_tokenUri = tokenURI(tokenId);
    	emit Minted(tokenId, _beneficiary, _tokenUri, _msgSender());
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}
}