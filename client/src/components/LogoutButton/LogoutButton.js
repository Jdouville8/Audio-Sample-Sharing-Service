import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from '@material-ui/core';

function LogoutButton() {
	const { logout } = useAuth0();

	return (

		<Link
		style={{ color: 'pink', margin: '5px', marginTop: '9%' }}
		onClick={() => logout({ returnTo: window.location.origin })}
	>
		Log Out
	</Link>
	);
}

export default LogoutButton;
