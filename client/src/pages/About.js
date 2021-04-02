import React from "react";
import Devs from "../dev.json";
import DevCard from "../components/DevCard";

function About() {
  const info = Devs;

  return (
    <div>
      <DevCard />
    </div>
  );
}

export default About;
