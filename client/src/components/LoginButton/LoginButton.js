import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from '@material-ui/core';

function LoginButton() {
	const { loginWithRedirect } = useAuth0();

	return (
		<Link
			style={{ color: 'pink', margin: '5px', marginTop: '9%' }}
			onClick={() => loginWithRedirect()}
		>
			Log In
		</Link>
	);
}

export default LoginButton;
