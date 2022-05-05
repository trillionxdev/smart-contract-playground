import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deploy, get } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();

  const target = await get("ErrorHandlingRevert");

  await deploy("TryCatch", {
    from: deployer,
    args: [target.address],
    log: true,
  });
  
};
export default func;
func.tags = ["TryCatch"];
