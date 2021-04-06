import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
	Card,
	CardMedia,
	Typography,
	CardContent,
	makeStyles,
	Button,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Login from './Login';

const useStyles = makeStyles({
	root: {
		marginTop: '19%',
	},
	cardTitle: {
		fontWeight: '20px',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	button: {
		color: '#5e235b',
		margin: 'auto',
		backgroundColor: '#8989fc',
	},
});

function Profile() {
	const { user, isAuthenticated } = useAuth0();

	const classes = useStyles();

	console.log(user);

	if (isAuthenticated) {
		return (
			<div
				style={{
					height: '120vh',
					width: '100%',
				}}
			>
				<Grid container direction="row" alignItems="center" justify="center">
					<Grid
						item
						style={{ height: '700px', width: '60%', minWidth: '500px' }}
					>
						<Card
							className={classes.root}
							variant="outlined"
							style={{
								backgroundColor: `rgba(0,0,0,.7)`,
								color: 'white',
								boxShadow: '5px 5px 15px #424242',
							}}
						>
							<CardContent>
								<Typography
									style={{ opacity: '1' }}
									className={classes.cardTitle}
								>
									Your Email: {user.email}
								</Typography>
								<br />
								<CardMedia
									className={classes.media}
									image={user.picture}
									title="Paella dish"
								/>
								<br />
								<Typography>User Description</Typography>
								<br />
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
		);
	} else return <Login />;
}

export default Profile;
