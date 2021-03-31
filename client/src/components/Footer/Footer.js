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
      }}
      className={classes.root}
    >
      <div>
        <AudioPlayer
          src="https://drive.google.com/uc?export=open&id=1NABnmpfSFFpNcjav7XbQiNisdR6OIHo6"
          onPlay={(e) => console.log("onPlay")}
          style={{
            width: "33%",
            backgroundColor: `rgba(0,0,0,0.5)`,
            borderRadius: "10px",
            margin: "auto",
          }}
        />
      </div>
    </footer>
  );
}

export default Footer;
