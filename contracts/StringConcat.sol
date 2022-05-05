//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/// @title Simple contract using string.concat()
contract StringConcat {
    string public storedMessage = "";

    /// @dev set message using abi.encodePacked()
    function setMessageEncodePacked(
        string calldata msgSender,
        string calldata newMessage
    ) external {
        storedMessage = string(abi.encodePacked(msgSender, " : ", newMessage));
    }

    /// @dev set message using string.concat()
    function setMessageStringConcat(
        string calldata msgSender,
        string calldata newMessage
    ) external {
        storedMessage = string.concat(msgSender, " : ", newMessage);
    }
}
