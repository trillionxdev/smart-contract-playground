import { deployments } from "hardhat";
import { ErrorHandlingRequire__factory, ErrorHandlingRevert__factory, LoopAdd__factory } from "../../typechain";

export const setupLoopAdd = deployments.createFixture(
  async ({deployments, ethers}, options) => {
    await deployments.fixture(["LoopAdd"]);
    const artifact = await deployments.get("LoopAdd");
    const signers = await ethers.getSigners();
    const deployer = signers[0];
    const contract = LoopAdd__factory.connect(artifact.address, deployer);
    return {
      contract,
    }
  }
);

export const setupErrorHandling = deployments.createFixture(
  async ({deployments, ethers}, options) => {
    await deployments.fixture(["ErrorHandling"]);
    const artifact0 = await deployments.get("ErrorHandlingRequire");
    const artifact1 = await deployments.get("ErrorHandlingRevert");
    const signers = await ethers.getSigners();
    const deployer = signers[0];
    const contractRequire = ErrorHandlingRequire__factory.connect(
      artifact0.address,
      deployer,
    );
    const contractRevert = ErrorHandlingRevert__factory.connect(
      artifact1.address,
      deployer,
    );
    const thresholdRequire = await contractRequire.THRESHOLD();
    const thresholdRevert = await contractRevert.THRESHOLD();
    return {
      contractRequire,
      contractRevert,
      thresholdRequire,
      thresholdRevert,
    }
  }
);