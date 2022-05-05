import { expect } from "chai";
import { ethers } from "hardhat";
import { setupReceiver } from "./fixture/setup-contracts";

describe("Receiver", function () {
  let tx, receipt;

  it("Deposit fund by calling function", async function () {
    const { contract, user1 } = await setupReceiver();
    expect(await contract.userDepositAmount(user1.address))
    .equal(0);
    const amount = ethers.utils.parseEther("32");
    tx = await contract.connect(user1).deposit({ value: amount });
    receipt = await tx.wait();
    expect(await contract.userDepositAmount(user1.address))
    .equal(amount);
    console.log("deposit(): ", receipt.gasUsed.toNumber());
  });

  it("Desposit fund by transfering ETH directly", async function () {
    const { contract, user2 } = await setupReceiver();
    expect(await contract.userDepositAmount(user2.address))
    .equal(0);
    const amount = ethers.utils.parseEther("64");
    tx = await user2.sendTransaction({
        to: contract.address,
        value: amount,
    });
    receipt = await tx.wait();
    expect(await contract.userDepositAmount(user2.address))
    .equal(amount);
    console.log("receive(): ", receipt.gasUsed.toNumber());
  });
});
