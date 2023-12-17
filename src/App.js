import React from "react";
import "./App.css";
import { useWalletConnectModal } from "my-walletapp";

function App() {
  const { openModal, closeConnection, sendTransaction } =
    useWalletConnectModal();

  const sendDummyTransaction = async () => {
    const tx = {
      chainId: 1,
      method: "sendTransaction",
      data: "fdlksfns",
    };
    await sendTransaction(tx);
    console.log("Dummy transaction sent");
  };
  return (
    <div className="App">
      <button onClick={openModal}>Connect Wallet</button>
      <button onClick={closeConnection}>Disconnect Wallet</button>
      <button onClick={sendDummyTransaction}>Send Dummy Transaction</button>
    </div>
  );
}

export default App;
