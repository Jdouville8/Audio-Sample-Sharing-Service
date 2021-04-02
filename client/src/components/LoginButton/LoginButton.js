import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Tooltip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	login: {
		cursor: "pointer",
	},
}));

function LoginButton() {
	const classes = useStyles();
	const { loginWithRedirect } = useAuth0();

	return (
		<Tooltip title="Login">
			<Link
				className={classes.login}
				style={{ color: "pink", margin: "5px" }}
				onClick={() => loginWithRedirect()}>
				Login
			</Link>
		</Tooltip>
	);
}

export default LoginButton;
