import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import { Link, makeStyles, MenuItem } from '@material-ui/core';

const AuthenticationButton = () => {
	const { isAuthenticated } = useAuth0();

	if (isAuthenticated) {
		return (
			<>
				<MenuItem>
					{' '}
					<Link
						to=""
						style={{
							color: '#3d1347',
							margin: '5px',
							textDecoration: 'none',
						}}
					>
						Profile
					</Link>
				</MenuItem>
				<MenuItem>
					<Link
						to="/account"
						style={{
							color: '#3d1347',
							margin: '5px',
							textDecoration: 'none',
						}}
					>
						Account
					</Link>
				</MenuItem>
				<MenuItem>
					<LogoutButton />
				</MenuItem>
			</>
		);
	} else {
		return <LoginButton />;
	}
};

export default AuthenticationButton;
