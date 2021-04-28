import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Wrapper from "./App";
import Login from "./Login";

ReactDOM.render(
  <Auth0Provider
    domain=""
    clientId=""
    redirectUri={window.location.origin}
    audience=""
    useRefreshTokens={true}
    cacheLocation="localstorage"
  >
    <Wrapper>
      <Login />
    </Wrapper>
  </Auth0Provider>,
  document.getElementById("root")
);
