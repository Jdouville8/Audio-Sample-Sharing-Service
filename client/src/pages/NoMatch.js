import React from "react";
import Error from "../images/404.png";
function NoMatch() {
  return (
    <div style={{ height: "100vh" }}>
      <img src={Error} style={{ display: "block", margin: "auto" }} />
    </div>
  );
}

export default NoMatch;
