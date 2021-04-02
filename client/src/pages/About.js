import React from "react";
import Devs from "../dev.json";
import DevCard from "../components/DevCard";

function About() {
  const info = Devs;

  return (
    <div>
      <DevCard
        pic={info.pic}
        name={info.name}
        role={info.role}
        about={info.about}
        gitHub={info.gitHub}
      />
    </div>
  );
}

export default About;
