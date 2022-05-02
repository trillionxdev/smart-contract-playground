import { expect } from "chai";
import { setupLoopAdd } from "./fixture/setup-contracts";

describe("LoopAdd", function () {
  let tx;
  const lastTerm = 100;
  const expectedloopSum = [...Array(lastTerm).keys()]
                          .reduce((sum, current) => sum + (current+1), 0);
  it("Loop Post-Add", async function () {
    const { contract } = await setupLoopAdd();
    tx = await contract.loopPostAdd(lastTerm);
    await tx.wait();
    expect(await contract.loopSum()).equal(expectedloopSum);
  });

  it("Loop Pre-Add", async function () {
    const { contract } = await setupLoopAdd();
    tx = await contract.loopPreAdd(lastTerm);
    await tx.wait();
    expect(await contract.loopSum()).equal(expectedloopSum);
  });

  it("Loop Pre-Add (unchecked)", async function () {
    const { contract } = await setupLoopAdd();
    tx = await contract.loopPreAddUnchecked(lastTerm);
    await tx.wait();
    expect(await contract.loopSum()).equal(expectedloopSum);
  });
});
