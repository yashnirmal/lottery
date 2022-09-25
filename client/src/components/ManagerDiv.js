import React,{useContext} from 'react';
import "./ManagerDiv.css";
import web3StuffContext from "../context/Web3StuffContext";


export default function ManagerDiv() {

  let [web3,contract,account] = useContext();

  let [winner,setWinner] = useState("");

  function findWinner(){
    contract.methods.findWinner().send({from:account});
  }

  return (
    <div className="manager-div">
      <span>*This section is for only the manager</span>
      <button onClick={findWinner}>Find a winner</button>
      {
        (winner.length!==0)?(<div>Winner is {winner}</div>):(<></>)
      }
    </div>
  );
}
