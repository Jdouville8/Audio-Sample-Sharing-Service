import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import NavBar from "./components/navBar/NavBar.js";
import Landing from "./pages/Landing";
import FileSubmit from "./pages/fileSubmit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
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
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route exact path={"/signup"}>
            <Signup />
          </Route>
          <Route exact path={"/home"}>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
