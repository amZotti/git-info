import React from "react";
import styled from "styled-components";
import { Notification } from "./shared.js";
import { getGithubLink } from "../utils.js";


export default () =>(
  <React.Fragment>
    <Notification>Submit an organization name to proceed</Notification>
    <p>You could search {getGithubLink("/search","all of Github")} or try an {getGithubLink("/search/advanced","advanced search")}.</p>
  </React.Fragment>
);