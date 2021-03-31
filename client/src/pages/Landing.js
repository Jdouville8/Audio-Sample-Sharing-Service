import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  makeStyles,
} from "@material-ui/core";
import Background from "../images/landing.png";
import { positions } from "@material-ui/system";

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
        }}
      >
        <Card
          className={classes.root}
          style={{
            position: "absolute",
            bottom: "35%",
            left: "5%",
            width: "35%",
            opacity: ".8",
          }}
          variant="outlined"
        >
          <CardContent>
            <Typography style={{ opacity: "1" }}>
              <b>WavMovers</b> is a cutting edge audio sample library and
              education platform aimed to enable music creators to make their
              ideas reality. All samples purchased are royalty-free, ready for
              use in any production with no copyright implications to worry
              about. In the Age of information, WavMovers is a one stop
              destination for all the tools you need to turn ideas into
              masterpieces.
            </Typography>
            <br />
            <Typography>
              Want to know more about making your own sounds and how to
              implement them in your productions? Then check out the educational
              resources tab for interactive Ableton project file lessons, 1-on-1
              sessions with your favorite artists and links to free educational
              resources to get you started.
            </Typography>
            <br />
            <Typography>
              In the Age of information, WavMovers is a one stop destination for
              all the tools you need to turn ideas into masterpieces.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href="/signup">
              Sign up today
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Landing;
