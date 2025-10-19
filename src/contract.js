import { ethers } from "ethers";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// Provider + signer
const provider = new ethers.JsonRpcProvider(process.env.BASE_RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Charger ABI et bytecode compilé
const artifactPath = path.resolve("./artifacts/contracts/RocketMechanicForMoto.sol/RocketMechanicForMoto.json");
const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

// Créer l'objet contrat
export const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  artifact.abi,
  signer
);
