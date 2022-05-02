//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ErrorHandlingRequire {
    uint8 public constant THRESHOLD = 100;
    uint256 public storedNumber = THRESHOLD;

    function set(uint256 number) external {
        require(number > THRESHOLD, "NumberTooSmall(xx)");
        storedNumber = number;
    }
}

error NumberTooSmall(uint256 invalidNumber);

contract ErrorHandlingRevert {
    uint8 public constant THRESHOLD = 100;
    uint256 public storedNumber = THRESHOLD;

    function set(uint256 number) external {
        if (number <= THRESHOLD) revert NumberTooSmall(number);
        storedNumber = number;
    }
}
