import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import React from "react";
import { BottomNavigation, Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <footer
      container
      style={{
        position: "sticky",
        bottom: 0,
        backgroundColor: "#3d1347",
      }}
      className={classes.root}
    >
      <div>
        <AudioPlayer
          autoPlay
          src="http://example.com/audio.mp3"
          onPlay={(e) => console.log("onPlay")}
          style={{
            width: "33%",
            backgroundColor: `rgba(0,0,0,.3)`,
            borderRadius: "10px",
            margin: "auto",
          }}
        />
      </div>
    </footer>
  );
}

export default Footer;
