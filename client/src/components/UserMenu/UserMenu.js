import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import { MenuItem } from '@material-ui/core';

const AuthenticationButton = () => {
	const { isAuthenticated } = useAuth0();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	if (isAuthenticated) {
		return (
			<>
				<MenuItem onClick={handleMenuClose}>
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
				<MenuItem onClick={handleMenuClose}>
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
				<MenuItem onClick={handleMenuClose}>
					<LogoutButton />
				</MenuItem>
			</>
		);
	} else {
		return <LoginButton />;
	}
};

export default AuthenticationButton;
