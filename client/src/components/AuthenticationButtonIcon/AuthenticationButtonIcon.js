import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButtonIcon from "../LoginButtonIcon/LoginButtonIcon";
import LogoutButtonIcon from "../LogoutButtonIcon/LogoutButtonIcon";

const AuthenticationButton = () => {
	const { isAuthenticated } = useAuth0();

	return isAuthenticated ? <LogoutButtonIcon /> : <LoginButtonIcon />;
};

export default AuthenticationButton;
