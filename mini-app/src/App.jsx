import React, { useEffect } from "react";
import { sdk } from "@farcaster/minisdk";

function App() {
  useEffect(() => {
    // Vérifier que le SDK est prêt
    sdk.actions.ready()
      .then(() => {
        console.log("✅ SDK Base Mini App ready!");
      })
      .catch((err) => {
        console.error("⚠️ SDK init error:", err);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>RocketMechanic Mini App</h1>
      <p>Bienvenue dans ta Mini App Base 🚀</p>
      <button
        onClick={async () => {
          try {
            const account = await sdk.actions.connectWallet();
            console.log("Wallet connecté :", account);
          } catch (err) {
            console.error("Connexion wallet échouée :", err);
          }
        }}
        style={{
          padding: "1rem 2rem",
          marginTop: "1rem",
          fontSize: "1rem",
          cursor: "pointer"
        }}
      >
        Connecter mon wallet Base
      </button>
    </div>
  );
}

export default App;
