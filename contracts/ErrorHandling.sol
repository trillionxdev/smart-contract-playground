//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/// @title Simple contract with error handling using require()
contract ErrorHandlingRequire {
    uint8 public constant THRESHOLD = 100;
    uint256 public storedNumber = THRESHOLD;

    /// @dev store the number if it larger than threshold
    function set(uint256 number) external {
        require(number > THRESHOLD, "NumberTooSmall(xx)");
        storedNumber = number;
    }
}

/// @title Simple contract with error handling using custom error
contract ErrorHandlingRevert {
    uint8 public constant THRESHOLD = 100;
    uint256 public storedNumber = THRESHOLD;

    /// custom error
    error NumberTooSmall(uint256 invalidNumber);

    /// @dev store the number if it larger than threshold
    function set(uint256 number) external {
        if (number <= THRESHOLD) revert NumberTooSmall(number);
        storedNumber = number;
    }
}
