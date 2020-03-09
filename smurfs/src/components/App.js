import React, { Component } from "react";
import "./App.css";

import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";



function App() {
  return (
    <div className="App">
      <SmurfList />
      <SmurfForm />
    </div>
  );
}

export default App;
