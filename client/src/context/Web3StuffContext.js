import React,{ createContext, useState, useEffect } from "react";
import Lottery from "../contracts/Lottery.json";
import getWeb3 from "../getWeb3";


export const web3StuffContext = createContext();

function Web3StuffContextProvider(props){

    // let [web3,setWeb3] = useState(null);
    // let [contract,setContract] = useState(null);
    // let [account,setAccount] = useState(null);

    useEffect(()=>{
      getWeb3Stuff();
      console.log(web3,account,contract);
    },[]);

    var web3,account,contract;

    async function getWeb3Stuff() {
      // Get network provider and web3 instance.
      // const _web3 = await getWeb3();
      web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      // const accounts = await _web3.eth.getAccounts();
      // setAccount(accounts[0]);
      const accounts = await web3.eth.getAccounts();
      account = accounts[0];

      // Get the contract instance.
      // const _contract = new _web3.eth.Contract(
      //   Lottery.abi,
      //   "0x8FEE0D31f4e9fdcEdd03283A656D01d1a466d21C"
      // );
      contract = new web3.eth.Contract(
        Lottery.abi,
        "0x2E2902a865840acD89bF5F7e58Da2d981D6E9f42"
      );

      // await setWeb3(_web3);
      // await setContract(_contract);

    }

    let value = {web3,contract,account};

    return(
        <web3StuffContext.Provider value={value}>
            {props.children}
        </web3StuffContext.Provider>
    )
}

export default Web3StuffContextProvider;
