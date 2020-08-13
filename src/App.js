import React from "react";
import styled from "styled-components";

import './App.css';

import { fetchOrganization } from "./transport.js";

/*
  1. Instantiate git interface -> https://octokit.github.io/rest.js/v18
      - Download
      - Authenticate (ux)
  2. Orginzation selection (ux)
    - Number or search (depending on api)
  3. Repo/info list view with filters (ux)
    - filters depend on api
*/

const Page = styled.div``;


class App extends React.Component {
  render() {
    return (
      <Page>
        Works
      </Page>
    );
  }
}


export default App;
