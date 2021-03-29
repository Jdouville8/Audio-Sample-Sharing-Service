import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import NavBar from "./components/navBar/NavBar.js";
<<<<<<< HEAD
import FileSubmit from "./pages/fileSubmit"

function App() {
  return (
    <div className="App">
      <NavBar />
      <FileSubmit />
    </div>
  );
=======

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route exact path={"/"}>
						<Search />
					</Route>
				</Switch>
			</div>
		</Router>
	);
>>>>>>> 845b600069b88dc3e3867fd28d60c8d3a5555de8
}

export default App;
