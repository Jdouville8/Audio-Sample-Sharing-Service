import React from 'react';
import Details from '../components/Details/index';
import Grid from '@material-ui/core/Grid';
import Background from '../images/wallpaper.jpg';
import Packs from '../packs.json';
import { useAuth0 } from '@auth0/auth0-react';

import { makeStyles } from '@material-ui/core/styles';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gridGap: theme.spacing(3),
	},
}));

function Home() {
	const styles = useStyles();
	const { user, isAuthenticated, isLoading } = useAuth0();

	const results = Packs;

	if (isAuthenticated) {
		return (
			<div
				style={{
					height: '100vh',
					width: '100%',
					overflow: 'hidden',
				}}
			>
				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item sm={11} lg={8}></Grid>
				</Grid>
				<Grid container direction="row" justify="center" alignItems="center">
					{results.map((result) => (
						<Grid item>
							<Details
								id={result.id}
								key={result.id}
								src={result.src}
								title={result.title}
								artist={result.artist}
								overview={result.overview}
								dlUrl={result.dlUrl}
								audioSrc={result.audioSrc}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		);
	} else {
		return <Login />;
	}
}

export default Home;
