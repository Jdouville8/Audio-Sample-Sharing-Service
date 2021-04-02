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
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {props.role}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.about}
        </Typography>
      </CardContent>

      <CardActions>
        <a href={props.gitHub} target="_blank">
          GitHub
        </a>
      </CardActions>
    </Card>
  );
}
