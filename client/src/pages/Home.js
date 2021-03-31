import React from "react";
import Details from "../components/Details/index";
import Grid from "@material-ui/core/Grid";
import Icon from "../components/Icon";
import SearchBar from "../components/SearchBar";
import Background from "../images/wallpaper.jpg";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        height: "100vh",
        width: "100%",
      }}
    >
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item sm={11} lg={8}></Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        {/* need to map over search results and add these items dynamically */}
        <Grid item>
          <Icon />
        </Grid>
        <Grid item>
          <Details />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
