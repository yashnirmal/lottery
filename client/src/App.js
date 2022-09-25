import React, { Component } from "react";
// import Lottery from "./contracts/Lottery.json";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Participants from "./components/Participants";
import Web3StuffContextProvider from "./context/Web3StuffContext";

export default function App() {
  return (
    <>
      <Web3StuffContextProvider>
        <Navbar />
        <div style={{ width: "100vw", display: "flex", height: "90vh" }}>
          <Main style={{ flex: "3" }} />
          <Participants style={{ flex: "1" }} />
        </div>
      </Web3StuffContextProvider>
    </>
  );
}
