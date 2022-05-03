//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/// @title Three methods to compute sum
contract LoopAdd {
    uint256 public loopSum;

    /// @dev loop with i++
    function loopPostAdd(uint256 lastTerm) external {
        loopSum = 0;
        for (uint256 i = 1; i <= lastTerm; i++) {
            loopSum += i;
        }
    }

    /// @dev loop with ++i
    function loopPreAdd(uint256 lastTerm) external {
        loopSum = 0;
        for (uint256 i = 1; i <= lastTerm; ++i) {
            loopSum += i;
        }
    }

    /// @dev loop with unchecked
    function loopPreAddUnchecked(uint256 lastTerm) external {
        loopSum = 0;
        unchecked {
            for (uint256 i = 1; i <= lastTerm; ++i) {
                loopSum += i;
            }
        }
    }
}
