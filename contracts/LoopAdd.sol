//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/// @title Three methods to compute sum
contract LoopAdd {
    uint256 public loopSum;

    /// @dev loop with i++
    function loopPostAdd(uint8 lastTerm) external {
        loopSum = 0;
        for (uint8 i = 1; i <= lastTerm; i++) {
            loopSum += i;
        }
    }

    /// @dev loop with ++i
    function loopPreAdd(uint8 lastTerm) external {
        loopSum = 0;
        for (uint8 i = 1; i <= lastTerm; ++i) {
            loopSum += i;
        }
    }

    /// @dev loop with unchecked
    function loopPreAddUnchecked(uint8 lastTerm) external {
        loopSum = 0;
        unchecked {
            for (uint8 i = 1; i <= lastTerm; ++i) {
                loopSum += i;
            }
        }
    }
}
