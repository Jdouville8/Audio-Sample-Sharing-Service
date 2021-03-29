import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/NavBar.js";
import FileSubmit from "./pages/fileSubmit"

function App() {
  return (
    <div className="App">
      <NavBar />
      <FileSubmit />
    </div>
  );
}

export default App;
