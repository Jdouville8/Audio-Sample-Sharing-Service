import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Tooltip } from "@material-ui/core";

import AccountBox from "@material-ui/icons/AccountBox";

function LoginButton() {
	const { loginWithRedirect } = useAuth0();

	return (
		<Tooltip title="Login">
			<Link
				style={{ color: "pink", margin: "5px", marginTop: "9%" }}
				onClick={() => loginWithRedirect()}>
				<AccountBox />
			</Link>
		</Tooltip>
	);
}

export default LoginButton;
