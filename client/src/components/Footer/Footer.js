import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import React, { useState } from "react";
import { Tooltip, Fab, Link, makeStyles } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";
// import AudioSpectrum from "react-audio-spectrum";
// import Wave from "@foobar404/wave";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function Footer(props) {
  let history = useHistory();

  const classes = useStyles();

  const onClick = () => {
    history.push("/about");
  };
  // let [wave] = useState(new Wave());
  // let options = { type: "flower" };
  // wave.fromElement("player2", "visual2", options);
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        right: "50%",
      }}
      className={classes.root}
    >
      <div>
        <AudioPlayer
          src={props.audioSrc}
          header={props.audioTitle}
          volume=".025"
          onPlay={(e) => console.log("onPlay")}
          style={{
            width: "200%",
            backgroundColor: `rgba(0,0,0,0.6)`,
            borderRadius: "10px",
            color: "white",
            textAlign: "center",
          }}
        />
      </div>
      <div className={classes.fab}>
        <Tooltip title="About">
          <Fab
            onClick={onClick}
            className={classes.fab}
            size="small"
            style={{
              color: "violet",
              backgroundColor: `rgba(0,0,0,.7)`,
            }}
          >
            <InfoIcon />
          </Fab>
        </Tooltip>
      </div>
    </footer>
  );
}

export default Footer;
