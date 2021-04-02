import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
	card: {
		width: 300,
		height: 180,
	},
	button: {
		color: '#5e235b',
		margin: '10%'
	},
	label: {
		fontSize: '22px',
    color: 'white'
	}
}));

function EducationalResources() {

  const classes = useStyles();

  const preventDefault = (e) => {
		e.preventDefault();
		};

  return (
  <>
  <div className={classes.label}>
    <Typography>
      Additional Educational Resources
    </Typography>

    <Typography>
      Beginner
    </Typography>
    <a href='https://youtube.com/playlist?list=PLa9ASr8n5idAk2PpFepVai33M4AT7I3Z0' >
      Ableton Live Ultimate Crashcourse
    </a>

    <Typography>
      Sound Design
    </Typography>
    <a href='https://www.youtube.com/watch?v=M_FkdkYepQ4' >
      How to make Neurobass course
    </a>

    <Typography>
      Live Streams
    </Typography>
    <a href='https://youtube.com/playlist?list=PL4hlVFgfYnIxncow4AxCiL4vvzpPWV3r8' >
      COPYCATT
    </a>
    <br/>
    <a href='https://youtube.com/playlist?list=PL4hlVFgfYnIw8q_UJ3qOqm3ldFAsqkhby' >
      EPROM (Shades)
    </a>
    <br/>
    <a href='https://youtube.com/playlist?list=PL4hlVFgfYnIwShIQHtqImREXYWg26pTQd' >
      Mr. Carmack
    </a>
    <br/>
    <a href='https://youtube.com/playlist?list=PL4hlVFgfYnIwyzRiKEYl_zN-uUOoxJJcy' >
      Medasin
    </a>
    <br/>
    <a href='https://youtube.com/playlist?list=PL4hlVFgfYnIxZEQIXpJP-NQeqlrNcUer0' >
      Haywyre
    </a>
    <br/>
    <a href='https://youtube.com/playlist?list=PL4hlVFgfYnIxncow4AxCiL4vvzpPWV3r8' >
      Habstrakt
    </a>
    <br/>
    <a href='https://youtube.com/playlist?list=PL4hlVFgfYnIzBo0xDmqEwLYg_eFZiGKbd' >
      Effin
    </a>
    <br/>
    <a href='https://youtube.com/playlist?list=PL4hlVFgfYnIzmqe6Vg6upBjgHROn0zO57' >
      Kill The Noise
    </a>
    
  </div>;
  </>
  );
}

export default EducationalResources;
