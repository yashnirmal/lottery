import React, { useContext, useEffect, useState } from "react";
import "./Participants.css";
import {web3StuffContext} from "../context/Web3StuffContext";


export default function Participants() {

  let [totalParticipants,setTotalParticipants] = useState(0);
  const [participants, setParticipants] = useState([]);

  const {contract} = useContext(web3StuffContext);

  useEffect(()=>{
    console.log(contract);
    setParticipants([
      "0x00100101001001",
      "0x00100101001002",
      "0x00100101001003",
      "0x00100101001004",
      "0x00100101001001",
      "0x00100101001005",
    ]);
    contract.methods.getParticipants().call().then(res => {
      setParticipants(res);
      setTotalParticipants(res.length);
    });

  },[]);

  return (
    <div className="participants">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Total Participants</span>
        <span>{totalParticipants}</span>
      </div>
      <div className="participants-cont">
        {
            participants.map((el, index) => (
            <div className="single-particiapnt">{el}</div>
            ))
        }
      </div>
    </div>
  );
}
