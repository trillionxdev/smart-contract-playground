import { expect } from "chai";
import { setupTryCatch } from "./fixture/setup-contracts";

describe("TryCatch", function () {
  let tx;
  
  it("Successfully set number", async function () {
    const { contract, target, thresohld } = await setupTryCatch();
    const newNumber = thresohld + 10;
    tx = await contract.setNumber(newNumber);
    await tx.wait();
    expect(await target.storedNumber()).equal(newNumber);
    expect(await contract.updateCount()).equal(1);
    expect(await contract.errorCount()).equal(0);
  });

  it("Failed to set number ", async function () {
    const { contract, target, thresohld } = await setupTryCatch();
    const newNumber = thresohld - 10;
    tx = await contract.setNumber(newNumber);
    await tx.wait();
    expect(await target.storedNumber()).equal(thresohld);
    expect(await contract.updateCount()).equal(0);
    expect(await contract.errorCount()).equal(1);
  });
});
