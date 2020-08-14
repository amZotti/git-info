import React from "react";
import styled from "styled-components";
import { Notification } from "./shared.js";

const Code = styled.code`
  overflow-x: auto;
  word-wrap: break-word;
`;

const Bold = styled.span`
  font-weight: 600;
`;


export default ({ errorState, organizationName }) =>(
    <React.Fragment>
      <Notification>Houston, we have a problem</Notification>
      <Code>
        Error: {errorState}
      </Code>
      <p>We could not find the specified organization: <Bold>{organizationName}</Bold></p>
      <p>Double check to make sure the organization name you entered is correct and feel free to try again! (:</p>
    </React.Fragment>
 );