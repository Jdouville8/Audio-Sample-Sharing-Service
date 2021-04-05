import React from 'react';
import Login from './Login';
import { useAuth0 } from '@auth0/auth0-react';
import {
	Grid,
	Card,
	CardActions,
	CardContent,
	Button,
	TextField,
	makeStyles,
} from '@material-ui/core';
import CoolImg from '../images/ms1-1.png';

const useStyles = makeStyles({
	root: {
		minWidth: 350,
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

function Signup() {
	const { user, isAuthenticated, isLoading } = useAuth0();

	const classes = useStyles();

	const onSubmit = () => {};

	if (isAuthenticated) {
		return (
			<div
				style={{
					height: '100vh',
					width: '100%',
				}}
			>
				<Grid>
					<Grid item lg={5}>
						<div
							style={{
								position: 'absolute',
								left: '50%',
								top: '50%',
								transform: 'translate(-50%, -50%)',
								opacity: '.95',
								boxShadow: '5px 5px 15px grey',
							}}
						>
							<Card className={classes.root} variant="outlined">
								<form>
									<CardActions>
										<TextField id="outlined-basic" label="Email" fullWidth />
									</CardActions>
									<CardActions>
										<TextField id="outlined-basic" label="Username" fullWidth />
									</CardActions>
									<CardActions>
										<TextField id="outlined-basic" label="Password" fullWidth />
									</CardActions>
									<CardActions>
										<Button
											color="secondary"
											variant="outlined"
											size="medium"
											onClick={onSubmit}
										>
											Signup
										</Button>
									</CardActions>
								</form>
							</Card>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	} else {
		return <Login />;
	}
}

export default Signup;
