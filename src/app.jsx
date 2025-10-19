import React, { useEffect, useState } from "react";
import { initContract, getContract } from "./contract";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function load() {
      await initContract();
      const s = await getContract().getMotoStatus();
      setStatus(s);
    }
    load();
  }, []);

  const addFuel = async () => {
    const tx = await getContract().addFuel();
    await tx.wait();
    const s = await getContract().getMotoStatus();
    setStatus(s);
  };

  const changeEngine = async () => {
    const tx = await getContract().changeEngine("Turbo");
    await tx.wait();
    const s = await getContract().getMotoStatus();
    setStatus(s);
  };

  const installTrumpMode = async () => {
    const tx = await getContract().installTrumpMode();
    await tx.wait();
    const s = await getContract().getMotoStatus();
    setStatus(s);
  };

  const upgradeEngine = async () => {
    const tx = await getContract().upgradeEngine();
    await tx.wait();
    const s = await getContract().getMotoStatus();
    setStatus(s);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Rocket Mechanic Moto</h1>
      <p>Status: {status}</p>
      <button onClick={addFuel}>Add Fuel</button>
      <button onClick={changeEngine}>Change Engine</button>
      <button onClick={installTrumpMode}>Install Trump Mode</button>
      <button onClick={upgradeEngine}>Upgrade Engine</button>
    </div>
  );
}

export default App;
