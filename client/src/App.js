import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import NavBar from "./components/navBar/NavBar.js";
import Landing from "./pages/Landing";
import FileSubmit from "./pages/fileSubmit";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div style={{ height: "100vh" }}>
        <NavBar />
        <Switch>
          <Route exact path={"/search"}>
            <Search />
          </Route>
          <Route exact path={["/", "/landing"]}>
            <Landing />
          </Route>
          <Route exact path={"/upload"}>
            <FileSubmit />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
