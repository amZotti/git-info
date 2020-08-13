import React from "react";
import styled from "styled-components";

import './App.css';

import { fetchOrganization } from "./transport.js";
import { getGithubLink } from "./utils.js";

/*
  1. Instantiate git interface -> https://octokit.github.io/rest.js/v18
      - Download
      - Authenticate (ux)
  2. Orginzation selection (ux)
    - Number or search (depending on api)
  3. Repo/info list view with filters (ux)
    - filters depend on api


  color scheme: https://coolors.co/000000-3d2645-832161-da4167-f0eff4
*/

const Page = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row;
`

const Main = styled.section`
  background-color: var(--base-color);
  width: 100%;
  border-left: 2px solid #e1e4e8;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Introduction = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-family: cursive;
  color: var(--cerise);
`;

const Menu = styled.menu`
  min-width: 250px;
  max-width: 20vw;
  padding: 0px;
`;

const Find = styled.input`
  min-width: 200px;
  max-width: 80%;
  margin: 16px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  box-shadow: inset 0 1px 0 rgba(225,228,232,.2);
  line-height: 20px;
  color: #24292e;
  vertical-align: middle;
`;

const Code = styled.code`
  overflow-x: auto;
  word-wrap: break-word;
`;

const Notification = styled.h3`
  margin: 16px 0;
  font-size: 24px;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const finderText = "Find an Orginzation by name";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      organizationName: "",
      repositories: [],
      error: false,
      errorState: "",
    };
  }

  onChange = e => {
    this.setState({ organizationName: e.target.value, error: false, errorState: "" });
  }

  displayResults = () => {
    fetchOrganization(this.state.organizationName)
      .then(repositories => this.setState({ repositories, error: false, errorState: "" }))
      .catch(e => {
        this.setState({
          error: true,
          errorState: e.message,
          repositories: [],
        })
      });
  }

  detectEnter = e => {
    if (e.key === "Enter") {
      this.displayResults();
    }
  }



  render() {
    return (
      <Page>
        <Menu>
          <Find 
            placeholder={finderText}
            aria-label={finderText}
            type="text"
            onChange={this.onChange}
            onKeyDown={this.detectEnter}
            value={this.state.organizationName}
          />
        </Menu>
        <Main>
          {this.renderMain()}
        </Main>
      </Page>
    );
  }

  renderMain = () => {

    if (this.state.error) {
      return (
        <React.Fragment>
          <Notification>Houston, we have a problem</Notification>
          <Code>
            Error: {this.state.errorState}
          </Code>
          <p>We could not find the specified organization: <Bold>{this.state.organizationName}</Bold></p>
          <p>Double check to make sure the organization name you entered is correct and feel free to try again! (:</p>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Notification>Submit an organization name to proceed</Notification>
        <p>You could search {getGithubLink("/search","all of Github")} or try an {getGithubLink("/search/advanced","advanced search")}.</p>
      </React.Fragment>
    );
  }
}


export default App;
