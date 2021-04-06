import React, { useState } from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Background from "../images/landing.png";
import Logo from "../images/LogoV5.png";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  indent: {
    textIndent: "30px",
  },
});

function Landing() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <div
        container
        style={{
          position: "relative",
          backgroundImage: `url(${Background})`,
          width: "100",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          overflow: "hidden",
        }}
      >
        <Card
          className={classes.root}
          style={{
            position: "absolute",
            bottom: "30%",
            left: "5%",
            width: "35%",
            backgroundColor: `rgba(0,0,0,.7)`,
            color: "white",
            maxHeight: "55%",
            overflow: "auto",
          }}
          variant="outlined"
        >
          <CardContent>
            <Typography>
              <p className={classes.indent}>
                <b>WavMovers</b> is a cutting edge audio sample library and
                education platform aimed to enable music creators to make their
                ideas reality. All samples purchased are royalty-free, ready for
                use in any production with no copyright implications to worry
                about. In the Age of information, WavMovers is a one stop
                destination for all the tools you need to turn ideas into
                masterpieces.
              </p>
              <p className={classes.indent}>
                Want to know more about making your own sounds and how to
                implement them in your productions? Then check out the
                educational resources tab for interactive Ableton project file
                lessons, 1-on-1 sessions with your favorite artists and links to
                free educational resources to get you started.
              </p>
              <p className={classes.indent}>
                In the Age of information, WavMovers is a one stop destination
                for all the tools you need to turn ideas into masterpieces.
              </p>
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              size="small"
              to="/signup"
              style={{ textDecoration: "none", color: "violet" }}
            >
              Sign up today
            </Link>
          </CardActions>
        </Card>
        <img
          src={Logo}
          style={{
            height: "20%",
            position: "absolute",
            left: "10%",
            top: "2%",
          }}
        ></img>
      </div>
    </div>
  );
}

export default Landing;
