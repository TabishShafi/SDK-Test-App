import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PlenaWalletProvider } from "plena-wallet-sdk";

const root = ReactDOM.createRoot(document.getElementById("root"));
const config = {
  dappToken:
    "269a0d4e4b338001c220588534ae809bfc6b1a322415f2561e93e08d5446bb352b08d5a2d85b9fac75ad15d72a087c9a95857e4e265ce0e368440733e9a130b9",
  dappId: "clotfuhlkqlqs7on7o0g",
  bridgeUrl: "connect.plena.finance",
};
root.render(
  <PlenaWalletProvider config={config}>
    <App />
  </PlenaWalletProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
