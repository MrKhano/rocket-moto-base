import { ethers } from "ethers";
import artifact from "./contracts/RocketMechanicForMoto.json";

let contract;
let signer;
let provider;

// Fonction pour initialiser le contrat et MetaMask
export async function initContract() {
  if (!window.ethereum) {
    alert("MetaMask required!");
    return;
  }

  // Demande la connexion au wallet
  provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);

  signer = await provider.getSigner();

  // Crée l'objet contract
  contract = new ethers.Contract(
    import.meta.env.VITE_CONTRACT_ADDRESS, // Adresse du contrat depuis .env
    artifact.abi,
    signer
  );

  return contract;
}

// Retourne l'objet contract pour l'utiliser dans App.jsx
export function getContract() {
  return contract;
}
