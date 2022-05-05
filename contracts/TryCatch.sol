//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ErrorHandlingRevert} from "./ErrorHandling.sol";

/// @title Simple contract with error handling using require()
contract TryCatch {
    ErrorHandlingRevert public target;
    uint256 public updateCount;
    uint256 public errorCount;

    constructor(address targetAddr) {
        target = ErrorHandlingRevert(targetAddr);
        updateCount = 0;
        errorCount = 0;
    }

    /// @dev store the number if it larger than threshold, using try-catch error handling
    function setNumber(uint256 number) external {
        try target.set(number) {
            ++updateCount;
        } catch (bytes memory) {
            ++errorCount;
        }
    }
}
