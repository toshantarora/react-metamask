import { useEffect, useState } from 'react';
import {Contracts, providers} from 'ethers';
import './App.css';

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if(window.ethereum)
    {
      setIsWalletInstalled(true);
    }
  }, [])

  async function connectWallet() 
  {
    window.ethereum
    .request({
      method: "eth_requestAccounts",
    })
    .then((account) => {
      setAccount(account[0]);
    })
    .catch((error) => {
      alert("something went wrong");
    })
  }
  
  if(account === null ) {
    return(
      <div className='App'>
        {
          isWalletInstalled ? 
          (<button onClick={connectWallet}>Connect Wallet</button>)
          :
          <p> Install MetaMask Wallet</p>
        }
      </div>
    )
  }
  return (
    <div className="App">
      <p>Connected as : {account}</p>
    </div>
  );
}

export default App;
