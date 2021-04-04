import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import React from "react";
import { Tooltip, Fab, Link, makeStyles } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    position: "absolute",
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
          src={props.audioSrc}
          onPlay={(e) => console.log("onPlay")}
          style={{
            width: "33%",
            backgroundColor: `rgba(0,0,0,0.5)`,
            borderRadius: "10px",
            margin: "auto",
          }}
        />
      </div>
      <div>
        <Tooltip title="About">
          <Fab
            onClick={onClick}
            className={classes.fab}
            size="small"
            style={{
              backgroundColor: "slategray",
              color: "pink",
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
