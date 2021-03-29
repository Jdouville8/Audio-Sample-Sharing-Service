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
      <div>
        <Grid
          style={{
            backgroundImage: `url(${Background})`,
            width: "100%",
            height: "800px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
          }}
          position="relative"
          container
          direction="row"
        >
          <Grid item>
            <Card
              className={classes.root}
              variant="outlined"
              position="absolute"
              bottom={8}
              left="50%"
            >
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Info Message
                </Typography>
                <Typography variant="h5" component="h2">
                  HEADER
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Things to ut here
                </Typography>
                <Typography variant="body2" component="p">
                  and here
                  <br />
                  maybe here too
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  Maybe this is a link to the signup.login
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Landing;
