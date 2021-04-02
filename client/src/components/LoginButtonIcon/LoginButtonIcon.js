import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Tooltip, makeStyles } from "@material-ui/core";
import AccountBox from "@material-ui/icons/AccountBox";

const useStyles = makeStyles(() => ({
	login: {
		cursor: "pointer",
	},
}));

function LoginButtonIcon() {
	const classes = useStyles();
	const { loginWithRedirect } = useAuth0();

	return (
		<Tooltip title="Login">
			<Link
				className={classes.login}
				style={{ color: "pink", margin: "5px", marginTop: "7%" }}
				onClick={() => loginWithRedirect()}>
				<AccountBox />
			</Link>
		</Tooltip>
	);
}

export default LoginButtonIcon;
