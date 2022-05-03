import { expect } from "chai";
import { ethers } from "hardhat";
import { setupSwitchCase } from "./fixture/setup-contracts";

describe("SwitchCase", function () {
  let tx;

  it("Set key using if-else", async function () {
    const { contract } = await setupSwitchCase();
    let newKey = 101;
    tx = await contract.setKeyUsingIfElse(newKey);
    await tx.wait();
    expect(await contract.storedKey1()).eq(newKey);

    newKey = 102;
    tx = await contract.setKeyUsingIfElse(newKey);
    await tx.wait();
    expect(await contract.storedKey2()).eq(newKey);

    newKey = 103;
    tx = await contract.setKeyUsingIfElse(newKey);
    await tx.wait();
    expect(await contract.storedKey3()).eq(newKey);

    newKey = 104;
    await expect(contract.setKeyUsingIfElse(newKey)).to.be.reverted;
  });

  it("Set key using assembly", async function () {
    const { contract } = await setupSwitchCase();
    let newKey = 201;
    tx = await contract.setKeyUsingAssembly(newKey);
    await tx.wait();
    expect(await contract.storedKey1()).eq(newKey);

    newKey = 202;
    tx = await contract.setKeyUsingAssembly(newKey);
    await tx.wait();
    expect(await contract.storedKey2()).eq(newKey);

    newKey = 203;
    tx = await contract.setKeyUsingAssembly(newKey);
    await tx.wait();
    expect(await contract.storedKey3()).eq(newKey);

    newKey = 204;
    await expect(contract.setKeyUsingAssembly(newKey)).to.be.reverted;

  });
});
