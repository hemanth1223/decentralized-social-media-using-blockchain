// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ProfileImageNfts is ERC721, Ownable {

    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter _tokenIds;
    mapping(uint256 => string) _tokenURIs;

    struct RenderToken{
        uint256 id;
        string uri;
        string space;
    }

    constructor() ERC721("ProfileImageNfts","PIN"){}

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId),"URI not exist on that ID");
        string memory _RUri =  _tokenURIs[tokenId];
        return _RUri;
    }

    function getAlltoken() public view returns (RenderToken[] memory){
        uint256 latestId = _tokenIds.current();
        RenderToken[] memory res = new RenderToken[](latestId);
        for(uint256 i = 0; i  <= latestId ; i++){
            if(_exists(i)){
                string memory uri = tokenURI(i);
                res[i] = RenderToken(i,uri," ");
            }
        }
        return res;
    }

    function mint(address recipents, string memory _uri) public returns (uint256){
        uint256 newId = _tokenIds.current();
        _mint(recipents,newId);
        _setTokenURI(newId,_uri);
        _tokenIds.increment();
        return newId;
    }
}

// The provided Solidity code is a contract named `ProfileImageNfts` that represents a non-fungible token (NFT) collection using the ERC721 standard. It allows users to mint and manage profile image NFTs.

// Here's a breakdown of the contract's key components:

// 1. **SPDX License Identifier:** The SPDX-License-Identifier specifies the license under which the contract is distributed. In this case, it's using the MIT license.

// 2. **Pragma Directive:** `pragma solidity ^0.8.2;` specifies the version of the Solidity compiler the contract should use. The caret (^) symbol indicates that any compatible version greater than or equal to 0.8.2 but less than 0.9.0 can be used.

// 3. **Imports:** The contract imports various Solidity contracts from the OpenZeppelin library, including `ERC721`, `Ownable`, and `Counters`. These contracts provide essential functionalities for implementing ERC721 tokens and managing ownership.

// 4. **Contract Definition:** `contract ProfileImageNfts is ERC721, Ownable` declares the contract, which inherits from the `ERC721` and `Ownable` contracts. `ERC721` provides the basic functionality of an ERC721 token, and `Ownable` provides ownership control.

// 5. **Counters:** The `Counters.Counter` type is used to track the token IDs and manage the incrementation and decrementation of the IDs.

// 6. **Mappings and Variables:** The `_tokenIds` variable is a `Counters.Counter` instance that keeps track of the current token ID. The `_tokenURIs` mapping associates a token ID with its corresponding URI (Uniform Resource Identifier).

// 7. **Struct Definition:** The `RenderToken` struct represents a token's ID, URI, and space (which seems unused in the provided code).

// 8. **Constructor:** The `constructor` function initializes the contract by calling the constructor of the `ERC721` contract and passing in the token name ("ProfileImageNfts") and symbol ("PIN").

// 9. **Internal Functions:**
//    - `_setTokenURI`: An internal function that sets the token URI for a given token ID.
//    - `tokenURI`: Overrides the `tokenURI` function from the `ERC721` contract to return the URI of a specific token.

// 10. **Public Functions:**
//     - `getAlltoken`: Returns an array of `RenderToken` structs representing all existing tokens in the collection.
//     - `mint`: Mints a new token and assigns it to the specified recipient address. It sets the token's URI and increments the token ID.

// code seems to be a basic implementation of an ERC721 NFT contract for managing profile image NFTs. It allows minting new tokens, setting their URIs, and retrieving token information. However, it does not include features like token transfer or additional metadata.
