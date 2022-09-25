import React,{useContext, useEffect,useState} from 'react';
import "./Main.css";
import ManagerDiv from './ManagerDiv';
import web3StuffContext from "../context/Web3StuffContext";


export default function Main() {

  let {web3,contract,account} = useContext(web3StuffContext);

  let [totalBalance,setTotalBalance] = useState(0);

  function handleParticipate(){
    contract.methods.enterLotteryByPayingFees().send({from:account,value:web3.utils.toWei(1.7,"ether")}).then(console.log);
  }
  
  useEffect(()=>{
    setTotalBalance(contract.methods.getBalance().call());
  },[]);

  return (
    <div className='main'>

    <div className="balance-div">
      <div>
        <div>
          <span className="tot-balance">{totalBalance}</span>
          <span>ethers</span>
        </div>

        <button className='participate-btn' onClick={handleParticipate}>Participate</button>

      </div>
    </div>

    <ManagerDiv />
    </div>
  );
}
