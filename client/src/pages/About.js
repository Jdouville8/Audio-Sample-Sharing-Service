import React from "react";

import DevCard from "../components/DevCard/DevCard";
import Justin from "../images/Justin.jpeg";
import Nick from "../images/Nick.jpg";
import Luke from "../images/Luke.jpg";
import Seth from "../images/Seth.jpg";
import { Grid } from "@material-ui/core";

function About() {
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
    <div style={{ height: "100vh" }}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={4}
        style={{ marginTop: "20px" }}
      >
        {devs.map((dev) => (
          <Grid item style={{ height: "75%" }}>
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
    </div>
  );
}

export default About;
