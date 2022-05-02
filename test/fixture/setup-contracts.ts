import { deployments } from "hardhat";
import { LoopAdd__factory } from "../../typechain";

export const setupLoopAdd = deployments.createFixture(
  async ({deployments, ethers}, options) => {
    await deployments.fixture(["LoopAdd"]);
    const artifact = await deployments.get("LoopAdd");
    const signers = await ethers.getSigners();
    const deployer = signers[0];
    const contract = LoopAdd__factory.connect(artifact.address, deployer);
    const provider = deployer.provider;
    return {
      deployer,
      contract,
      provider,
    }
  }
);