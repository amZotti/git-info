import React from "react";
import styled from "styled-components";

const Cards = styled.div`
	overflow: scroll;
`;

const Container = styled.div`
	padding: 16px;
	margin: 16px;
	margin-bottom: 0px;
	background-color: #fff;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
`;

const Content = styled.div`

`;

const Name = styled.div`
	font-weight: 600;
	line-height: 1.25;
`;

const DeadLink = styled.a`
	text-decoration: none;
	color: #24292e
`;

const Description = styled.div`
	margin-top: 4px;
`;

const DescriptionText = styled.p`
	margin-top: 0;
    margin-bottom: 10px;
`;

const Stats = styled.p`
	font-size: 12px;
	margin-top: 8px;
	margin-bottom: 0;
	color: #586069;
`;

const Info = styled.span`
	margin-right: 16px;
`;

const Value = styled.span`
	font-weight: 600;
	color: black;
`;

const renderInfo = (field, value) => <Info>{field} <Value>{value}</Value></Info>

const Card = ({ name, size, language, created_at, open_issues, forks, watchers, description, html_url }) => (
	<Container>
		<Content>
			<Name>
				<DeadLink href={html_url} target="_blank">{name}</DeadLink>
			</Name>
			<Description>
				<DescriptionText>{description}</DescriptionText>
			</Description>
			<Stats>
				{renderInfo("Language", language)}
				{renderInfo("Forks", forks)}
				{renderInfo("Creation", created_at)}
				{renderInfo("Watchers", watchers)}
				{renderInfo("Size", size)}
				{renderInfo("Issues", open_issues)}
			</Stats>
		</Content>
	</Container>
)


/*
	PropTypes:

	repositories: 
		ArrayOf(<Object {
		    "forks": <Number>,
		    "open_issues": <Number>,
		    "watchers": <Number>,
		    "size": <Number>,
		    "stargazers_count": <Number>,
		    "watchers_count": <Number>,
		    "language": "<String>",
			"created_at": "<String>",
		    "updated_at": "<String>",
		    "description": <String>,
		    "html_url": <String>,
		    "watchers":  <Number>
		    "pushed_at": <String>,
		    "name": <String>,
		    "full_name": <String>,
	 }> )

*/

class Results extends React.Component {
	render() {
		return (
			<Cards>
				{this.props.repositories.map(Card)}
			</Cards>
		)
	}
}

export default Results;