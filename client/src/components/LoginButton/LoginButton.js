import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Tooltip, makeStyles, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	login: {
		cursor: 'pointer',
	},
}));

function LoginButton() {
	const classes = useStyles();
	const { loginWithRedirect } = useAuth0();

	return (
		<MenuItem>
			<Tooltip title="Login">
				<Link
					className={classes.login}
					style={{ color: '#3d1347', margin: '5px', textDecoration: 'none' }}
					onClick={() => loginWithRedirect()}
				>
					Login
				</Link>
			</Tooltip>
		</MenuItem>
	);
}

export default LoginButton;
