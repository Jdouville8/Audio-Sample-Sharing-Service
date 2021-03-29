import React from "react";

import "./App.css";
import NavBar from "./components/navBar/NavBar.js";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import router from "../../routes/api";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          {/* <Route>
            <Search />
          </Route> */}
          <Route exact path={"/landing"}>
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
