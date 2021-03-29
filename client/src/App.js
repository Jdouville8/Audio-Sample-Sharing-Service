import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import NavBar from "./components/navBar/NavBar.js";

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
}

export default App;
