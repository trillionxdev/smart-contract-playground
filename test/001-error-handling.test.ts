import { expect } from "chai";
import { setupErrorHandling } from "./fixture/setup-contracts";

describe("ErrorHandling", function () {
  let tx;
  
  it("Error Handling with require()", async function () {
    const { contractRequire, thresholdRequire } = await setupErrorHandling();
    const inputNumber = thresholdRequire - 1;
    await expect(contractRequire.set(inputNumber)).to.be.reverted;
  });

  it("Error Handling with revert()", async function () {
    const { contractRevert, thresholdRevert } = await setupErrorHandling();
    const inputNumber = thresholdRevert - 1;
    await expect(contractRevert.set(inputNumber)).to.be.reverted;
  });
});
