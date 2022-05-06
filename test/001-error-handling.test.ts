import { expect } from "chai";
import { setupErrorHandling } from "./fixture/setup-contracts";

describe("ErrorHandling", function () {
  let tx;
  
  it("Error Handling with require()", async function () {
    const { contractRequire, thresholdRequire } = await setupErrorHandling();
    tx = await contractRequire.set(thresholdRequire + 1);
    await tx.wait();
    await expect(contractRequire.set(thresholdRequire - 1)).to.be.reverted;
  });

  it("Error Handling with revert()", async function () {
    const { contractRevert, thresholdRevert } = await setupErrorHandling();
    tx = await contractRevert.set(thresholdRevert + 1);
    await tx.wait();
    await expect(contractRevert.set(thresholdRevert - 1)).to.be.reverted;
  });
});
