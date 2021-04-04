import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Tooltip, makeStyles } from "@material-ui/core";
import AccountBox from "@material-ui/icons/AccountBox";

const useStyles = makeStyles(() => ({
  login: {
    cursor: "pointer",
  },
}));

function LogoutButtonIcon() {
  const classes = useStyles();
  const { logout } = useAuth0();

  return (
    <Tooltip title="Logout">
      <Link
        className={classes.login}
        style={{ color: "pink", margin: "5px", marginTop: "7%" }}
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        <AccountBox />
      </Link>
    </Tooltip>
  );
}

export default LogoutButtonIcon;
