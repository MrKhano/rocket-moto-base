import { contract } from "./contract.js";

async function main() {
  console.log("🚀 Status initial de la moto:");
  console.log(await contract.getMotoStatus());

  // Ajouter de l'essence
  console.log("\n⛽ Ajout de fuel...");
  const txFuel = await contract.addFuel();
  await txFuel.waitForDeployment ? await txFuel.waitForDeployment() : await txFuel.wait();
  console.log("Fuel ajouté !");
  console.log(await contract.getMotoStatus());

  // Changer le moteur
  console.log("\n🔧 Changement du moteur en 'Turbo'...");
  const txEngine = await contract.changeEngine("Turbo");
  await txEngine.waitForDeployment ? await txEngine.waitForDeployment() : await txEngine.wait();
  console.log("Moteur changé !");
  console.log(await contract.getMotoStatus());

  // Activer le mode Trump
  console.log("\n🎩 Activation du mode Trump...");
  const txTrump = await contract.installTrumpMode();
  await txTrump.waitForDeployment ? await txTrump.waitForDeployment() : await txTrump.wait();
  console.log("Mode Trump activé !");
  console.log(await contract.getMotoStatus());

  // Upgrader le moteur
  console.log("\n⚡ Upgrade du moteur...");
  const txUpgrade = await contract.upgradeEngine();
  await txUpgrade.waitForDeployment ? await txUpgrade.waitForDeployment() : await txUpgrade.wait();
  console.log("Moteur upgradé !");
  console.log(await contract.getMotoStatus());
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
