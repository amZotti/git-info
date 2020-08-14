import React from "react";
import styled from "styled-components";
import { Notification } from "./shared.js";
import { getGithubLink } from "../utils.js";

const Bold = styled.span`
	font-weight: 700;
`;

export default () =>(
  <React.Fragment>
    <Notification>Getting started is easy</Notification>
    <p>Simply input an <Bold>organization name</Bold> into the menu on the left and <Bold>press enter</Bold></p>
    <div>For example: <pre>netflix</pre>, <pre>web50</pre>, or <pre>github</pre> are all great places to start</div>
    <p>You could also search {getGithubLink("/search","all of Github")} or try an {getGithubLink("/search/advanced","advanced search")}.</p>
  </React.Fragment>
);