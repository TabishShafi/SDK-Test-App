import React from "react";
import "./App.css";
import { useWalletConnectModal } from "my-walletapp";

function App() {
  const { openModal, closeConnection } = useWalletConnectModal();
  return (
    <div className="App">
      <button onClick={openModal}>Connect Wallet</button>
      <button onClick={closeConnection}>Disconnect Wallet</button>
    </div>
  );
}

export default App;
