import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import NavBar from './components/navBar/NavBar.js';
import FileSubmit from './pages/fileSubmit';

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route exact path={'/'}>
						<Search />
					</Route>
				</Switch>
				<FileSubmit />
			</div>
		</Router>
	);
}

export default App;
