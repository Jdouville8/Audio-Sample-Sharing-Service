import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { Auth0Provider } from "@auth0/auth0-react";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <Auth0Provider
      domain="wavmovers.us.auth0.com"
      clientId="IEGWrp4HIHw4dv4dcMoWlpgdpGA1IVrV"
      redirectUri={window.location.origin}
    >
      {/* <Auth0ProviderWithHistory> */}
      <App />
      {/* </Auth0ProviderWithHistory> */}
    </Auth0Provider>
  </Router>
);
registerServiceWorker();
