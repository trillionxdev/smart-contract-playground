//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/// @title Simple contract to demo switch case
contract SwitchCase {
    uint256 public storedKey1;
    uint256 public storedKey2;
    uint256 public storedKey3;

    /// @dev Switch case using if-else
    function setKeyUsingIfElse(uint256 newKey) external {
        uint256 remainder = newKey % 4;

        if (remainder == 1) storedKey1 = newKey;
        else if (remainder == 2) storedKey2 = newKey;
        else if (remainder == 3) storedKey3 = newKey;
        else revert();
    }

    /// @dev Switch case using assembly
    function setKeyUsingAssembly(uint256 newKey) external {
        assembly {
            let remainder := mod(newKey, 4)
            switch remainder
            case 1 {
                sstore(storedKey1.slot, newKey)
            }
            case 2 {
                sstore(storedKey2.slot, newKey)
            }
            case 3 {
                sstore(storedKey3.slot, newKey)
            }
            default {
                revert(0, 0)
            }
        }
    }
}
