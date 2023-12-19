import React from "react";
import "./App.css";
import { usePlenaWallet } from "plena-wallet-sdk";

function App() {
  const { openModal, closeConnection, sendTransaction, walletAddress } =
    usePlenaWallet();

  const sendDummyTransaction = async () => {
    const tx = {
      chainId: 1,
      method: "send_transaction",
      data: "fdlksfns",
    };
    await sendTransaction(tx);
    console.log("Dummy transaction sent");
  };

  const printWalletAddress = () => {
    console.log("App Wallet Address: ", walletAddress);
  };
  return (
    <div className="App">
      <button onClick={openModal}>Connect Wallet</button>
      <button onClick={closeConnection}>Disconnect Wallet</button>
      <button onClick={sendDummyTransaction}>Send Dummy Transaction</button>
      <button onClick={printWalletAddress}>GetWalletAddress</button>
    </div>
  );
}

export default App;
