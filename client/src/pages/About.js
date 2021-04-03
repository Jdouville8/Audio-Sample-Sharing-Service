import React from "react";

import DevCard from "../components/DevCard/DevCard";
import Justin from "../images/Justin.jpeg";
import Nick from "../images/Nick.jpg";
import Luke from "../images/Luke.jpg";
import Seth from "../images/Seth.jpg";
import { Grid, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

function About() {
  const classes = useStyles();
  const devs = [
    {
      name: "Justin Douville",
      about: "Blurbbbbb",
      gitHub: "https://github.com/Jdouville8",
      pic: `${Justin}`,
      role: "Back-End Dev",
    },
    {
      name: "Luke Oxner",
      about: "Blurbbbbb",
      gitHub: "https://github.com/lukeoxner",
      pic: `${Luke}`,
      role: "Back-End Dev",
    },
    {
      name: "Seth Hill",
      about: "Blurbbbbb",
      gitHub: "https://github.com/seff0",
      pic: `${Seth}`,
      role: "Front-End Dev",
    },
    {
      name: "Nick Goedecke",
      about: "Blurbbbbb",
      gitHub: "https://github.com/Perkyderm",
      pic: `${Nick}`,
      role: "Front-End Dev",
    },
  ];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        // spacing={2}
        style={{ marginTop: "20px" }}
      >
        {devs.map((dev) => (
          <Grid
            item
            style={{
              height: "75%",
              marginInline: "15px",
              marginBottom: "20px",
            }}
          >
            <DevCard
              pic={dev.pic}
              name={dev.name}
              role={dev.role}
              about={dev.about}
              gitHub={dev.gitHub}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "20px", color: "white" }}
      >
        <Grid item>
          <Button
            className={classes.paper}
            style={{
              backgroundColor: "#424242",
              color: "white",
            }}
            href="mailto:wavmovers@gmail.com"
            target="_blank"
          >
            Email the Team
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
