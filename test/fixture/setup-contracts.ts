import { deployments } from "hardhat";
import {
  LoopAdd__factory,
  ErrorHandlingRequire__factory,
  ErrorHandlingRevert__factory,
  SwitchCase__factory,
  TryCatch__factory,
  StringConcat__factory,
  Receiver__factory,
} from "../../typechain";

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

export const setupSwitchCase = deployments.createFixture(
  async ({deployments, ethers}, options) => {
    await deployments.fixture(["SwitchCase"]);
    const artifact = await deployments.get("SwitchCase");
    const signers = await ethers.getSigners();
    const deployer = signers[0];
    const contract = SwitchCase__factory.connect(artifact.address, deployer);
    return {
      contract,
    }
  }
);

export const setupTryCatch = deployments.createFixture(
  async ({deployments, ethers}, options) => {
    await deployments.fixture(["TryCatch"]);
    const contractArtifact = await deployments.get("TryCatch");
    const targetArtifact = await deployments.get("ErrorHandlingRevert");
    const signers = await ethers.getSigners();
    const deployer = signers[0];
    const contract = TryCatch__factory.connect(contractArtifact.address, deployer);
    const target = ErrorHandlingRevert__factory.connect(targetArtifact.address, deployer);
    const thresohld = await target.THRESHOLD();
    return {
      contract,
      target,
      thresohld,
    }
  }
);

export const setupStringConcat = deployments.createFixture(
  async ({deployments, ethers}, options) => {
    await deployments.fixture(["StringConcat"]);
    const artifact = await deployments.get("StringConcat");
    const signers = await ethers.getSigners();
    const deployer = signers[0];
    const contract = StringConcat__factory.connect(artifact.address, deployer);
    return {
      contract,
    }
  }
);

export const setupReceiver = deployments.createFixture(
  async ({deployments, ethers}, options) => {
    await deployments.fixture(["Receiver"]);
    const artifact = await deployments.get("Receiver");
    const signers = await ethers.getSigners();
    const deployer = signers[0];
    const contract = Receiver__factory.connect(artifact.address, deployer);
    const user1 = signers[1];
    const user2 = signers[2];
    return {
      contract,
      user1,
      user2,
    }
  }
);