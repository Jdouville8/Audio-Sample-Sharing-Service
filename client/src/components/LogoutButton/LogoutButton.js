import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	login: {
		cursor: 'pointer',
	},
}));

function LogoutButton() {
	const classes = useStyles();
	const { logout } = useAuth0();

	return (
		<Link
			className={classes.login}
			style={{ color: '#3d1347', margin: '5px', textDecoration: 'none' }}
			onClick={() => logout({ returnTo: window.location.origin })}
		>
			Logout
		</Link>
	);
}

export default LogoutButton;
