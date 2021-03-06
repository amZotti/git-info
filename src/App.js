import React from "react";
import styled from "styled-components";

import './App.css';

import { fetchOrganization } from "./transport.js";

import Error from "./components/Error.js"
import Introduction from "./components/Introduction.js"
import Results from "./components/Results.js";

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
    this.setState({ 
      organizationName: e.target.value, 
      error: false, 
      errorState: "",
      repositories: [],
    });
  }

  reset = () => this.setState({ repositories: [] });

  displayResults = () => {
    fetchOrganization(this.state.organizationName)
      .then(repositories => {
        repositories.sort((a,b) => b.forks - a.forks);
        this.setState({ repositories, error: false, errorState: "" })
      })
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
      return <Error {...this.state} />
    } else if (this.state.repositories.length) {
      return <Results repositories={this.state.repositories} reset={this.reset} />;
    } else {
      return <Introduction />;
    }
  }
}


export default App;
