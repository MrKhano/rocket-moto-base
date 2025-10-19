import { ethers } from "ethers";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  // Provider + signer
  const provider = new ethers.JsonRpcProvider(process.env.BASE_RPC_URL);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  console.log("Deploying with account:", await signer.getAddress());

  // Lire ABI et bytecode
  const artifactPath = path.resolve("./artifacts/contracts/RocketMechanicForMoto.sol/RocketMechanicForMoto.json");
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

  // Créer la ContractFactory
  const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, signer);

  // Déployer le contrat
  const contract = await factory.deploy();

  // Avec Ethers v6, il faut faire :
  await contract.waitForDeployment();

  console.log("Contract deployed to:", contract.target); // 'target' contient l'adresse déployée
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
