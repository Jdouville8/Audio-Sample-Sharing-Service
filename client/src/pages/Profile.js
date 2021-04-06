import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
	Card,
	Typography,
	CardContent,
	makeStyles,
	Button,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function Profile() {
	const { user, isAuthenticated } = useAuth0();

	return (
		<div>
			<h1>Hello Again</h1>
			<h2>Hello once more</h2>
		</div>
	);
}

export default Profile;
