import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import NavBar from './components/navBar/NavBar.js';
import Landing from './pages/Landing';
import FileSubmit from './pages/fileSubmit';

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
<<<<<<< HEAD
					<Route exact path={"/search"}>
						<Search />
					</Route>
					<Route exact path={["/", "/landing"]}>
						<Landing />
					</Route>
					<Route exact path={"/upload"}>
=======
					<Route exact path={'/search'}>
						<Search />
					</Route>
					<Route exact path={('/', '/landing')}>
						<Landing />
					</Route>
					<Route exact path={'/upload'}>
>>>>>>> main
						<FileSubmit />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
