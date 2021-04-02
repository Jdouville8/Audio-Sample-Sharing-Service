import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
    width: 250,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={props.pic} />
      <CardContent
        style={{
          backgroundColor: "#424242",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          style={{ color: "lightgray" }}
        >
          {props.role}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ color: "white" }}
        >
          {props.about}
        </Typography>
      </CardContent>
      <CardActions style={{ backgroundColor: "#424242" }}>
        <a
          href={props.gitHub}
          target="_blank"
          style={{ color: "pink", margin: "auto" }}
        >
          GitHub
        </a>
      </CardActions>
    </Card>
  );
}
