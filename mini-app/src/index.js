import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { sdk } from '@farcaster/miniapp-sdk';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Dès que ton app est prête à être affichée
sdk.actions.ready();

