import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Search from './pages/Search';
import NavBar from './components/navBar/NavBar.js';
import Landing from './pages/Landing';
import FileSubmit from './pages/fileSubmit';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Footer from '../src/components/Footer/Footer';
import Background from './images/wallpaper.jpg';
import NoMatch from './pages/NoMatch';

function App() {
	return (
		<Router>
			<div
				style={{
					backgroundImage: `url(${Background})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundAttachment: 'fixed',
				}}
			>
				<NavBar />
				<Switch>
					<Route exact path={'/search'}>
						<Search />
					</Route>
					<Route exact path={['/', '/landing']}>
						<Landing />
					</Route>
					<Route exact path={'/upload'}>
						<FileSubmit />
					</Route>
					<Route exact path={'/login'}>
						<Login />
					</Route>
					<Route exact path={'/signup'}>
						<Signup />
					</Route>
					<Route exact path={'/home'}>
						<Home />
					</Route>
					<Route exact path={'/home'}>
						<Home />
					</Route>
					<Route>
						<NoMatch />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
