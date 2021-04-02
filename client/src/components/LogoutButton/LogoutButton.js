import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Tooltip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	login: {
		cursor: "pointer",
	},
}));

function LogoutButton() {
	const classes = useStyles();
	const { logout } = useAuth0();

	return (
		<Tooltip title="Logout">
			<Link
				className={classes.login}
				style={{ color: "pink", margin: "5px", marginTop: "7%" }}
				onClick={() => logout({ returnTo: window.location.origin })}>
				Logout
			</Link>
		</Tooltip>
	);
}

export default LogoutButton;
