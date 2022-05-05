import { expect } from "chai";
import { setupStringConcat } from "./fixture/setup-contracts";

describe("StringConcat", function () {
  let tx;
  const msgSender = "Bob";
  const message = "ga ga wu la la";
  const expectOutput = msgSender + " : " + message;

  it("Concat string using abi.encodeConcat()", async function () {
    const { contract } = await setupStringConcat();
    expect(await contract.storedMessage()).equal("");
    tx = await contract.setMessageEncodePacked(msgSender, message);
    await tx.wait();
    expect(await contract.storedMessage()).equal(expectOutput);
  });

  it("Concat string using string.concat()", async function () {
    const { contract } = await setupStringConcat();
    expect(await contract.storedMessage()).equal("");
    tx = await contract.setMessageStringConcat(msgSender, message);
    await tx.wait();
    expect(await contract.storedMessage()).equal(expectOutput);
  });
});
