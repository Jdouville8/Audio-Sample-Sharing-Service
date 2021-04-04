import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    flexGrow: 1,
  },
  card: {
    width: 300,
    height: 180,
  },
  button: {
    color: "#5e235b",
    margin: "10%",
  },
  label: {
    fontSize: "22px",
    color: "white",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "10px",
    backgroundColor: `rgba(0,0,0,.7)`,
  },
  margins: {
    marginTop: "15px",
    marginBottom: "5px",
  },
  a: {
    color: "pink",
    textDecoration: "none",
  },
}));

function EducationalResources() {
  const classes = useStyles();

  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={classes.label} style={{ height: "100vh", margin: "0" }}>
        {/* TITLE */}
        <Typography
          align="center"
          variant="h3"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Additional Educational Resources
        </Typography>
        <Typography align="center" variant="h4" className={classes.margins}>
          Beginner
        </Typography>
        <Grid container justify="center">
          <Grid item sm={4}>
            <Paper className={classes.paper}>
              <a
                className={classes.a}
                href="https://youtube.com/playlist?list=PLa9ASr8n5idAk2PpFepVai33M4AT7I3Z0"
              >
                Ableton Live Ultimate Crashcourse
              </a>
            </Paper>
          </Grid>
        </Grid>
        <Typography align="center" variant="h4" className={classes.margins}>
          Sound Design
        </Typography>
        <Grid container justify="center">
          <Grid item sm={3}>
            <Paper className={classes.paper}>
              <a
                className={classes.a}
                href="https://www.youtube.com/watch?v=M_FkdkYepQ4"
              >
                How to make Neurobass course
              </a>
            </Paper>
          </Grid>
        </Grid>
        <Typography align="center" variant="h4" className={classes.margins}>
          Live Streams
        </Typography>

        <Grid container justify="center">
          <Grid item sm={3}>
            <Paper className={classes.paper}>
              <a
                className={classes.a}
                href="https://youtube.com/playlist?list=PL4hlVFgfYnIxncow4AxCiL4vvzpPWV3r8"
              >
                COPYCATT
              </a>
            </Paper>

            <Paper className={classes.paper}>
              <a
                className={classes.a}
                href="https://youtube.com/playlist?list=PL4hlVFgfYnIw8q_UJ3qOqm3ldFAsqkhby"
              >
                EPROM (Shades)
              </a>
            </Paper>

            <Paper className={classes.paper}>
              <a
                className={classes.a}
                href="https://youtube.com/playlist?list=PL4hlVFgfYnIwShIQHtqImREXYWg26pTQd"
              >
                Mr. Carmack
              </a>
            </Paper>

            <Paper className={classes.paper}>
              <a
                className={classes.a}
                href="https://youtube.com/playlist?list=PL4hlVFgfYnIwyzRiKEYl_zN-uUOoxJJcy"
              >
                Medasin
              </a>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper className={classes.paper}>
              <a
                className={classes.a}
                href="https://youtube.com/playlist?list=PL4hlVFgfYnIxZEQIXpJP-NQeqlrNcUer0"
              >
                Haywyre
              </a>
            </Paper>

            <Paper className={classes.paper}>
              <a
                className={classes.a}
                href="https://youtube.com/playlist?list=PL4hlVFgfYnIxncow4AxCiL4vvzpPWV3r8"
              >
                Habstrakt
              </a>
            </Paper>

            <Paper className={classes.paper}>
              <a
                className={classes.a}
                href="https://youtube.com/playlist?list=PL4hlVFgfYnIzBo0xDmqEwLYg_eFZiGKbd"
              >
                Effin
              </a>
            </Paper>

            <Paper className={classes.paper}>
              <a
                className={classes.a}
                href="https://youtube.com/playlist?list=PL4hlVFgfYnIzmqe6Vg6upBjgHROn0zO57"
              >
                Kill The Noise
              </a>
            </Paper>
          </Grid>
        </Grid>
      </div>
      ;
    </>
  );
}

export default EducationalResources;
