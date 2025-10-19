import React, { useEffect } from "react";
import { sdk } from "@farcaster/minisdk";

function App() {
  useEffect(() => {
    // Attendre que le SDK soit prêt
    sdk.actions.ready().then(() => {
      console.log("✅ SDK Base Mini App ready!");

      // Exemple : lire l'adresse connectée si le wallet est déjà connecté
      const account = sdk.getUserAccount?.();
      console.log("Wallet connecté :", account);
    }).catch((err) => {
      console.error("⚠️ Erreur SDK :", err);
    });
  }, []);

  return (
    <div>
      <h1>RocketMechanic Mini App</h1>
      <button
        onClick={async () => {
          try {
            // Demande de connexion wallet Base
            const account = await sdk.actions.connectWallet();
            console.log("Wallet connecté :", account);
          } catch (err) {
            console.error("Connexion wallet échouée :", err);
          }
        }}
      >
        Connecter mon wallet Base
      </button>
    </div>
  );
}

export default App;
