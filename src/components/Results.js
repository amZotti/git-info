import React from "react";
import styled from "styled-components";
import { fetchCommits } from "../transport.js";

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

const Content = styled.div``;

const Name = styled.div`
	font-weight: 600;
	line-height: 1.25;
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
	color: var(--casual-color);
`;

const Info = styled.span`
	margin-right: 16px;
`;

const Value = styled.span`
	font-weight: 600;
	color: black;
`;	

const Title = styled.h1``;

const renderInfo = (field, value) => <Info>{field} <Value>{value}</Value></Info>

const RepoCard = ({ name, size, language, created_at, open_issues, forks, watchers, description, html_url, full_name, viewCommits }) => (
	<Container>
		<Content>
			<Name>
				<a href={html_url} target="_blank">{name}</a>
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
				{renderInfo("", <a href="#" onClick={() => viewCommits(...full_name.split("/"))}>Latest Commits</a>)}
			</Stats>
		</Content>
	</Container>
);


const CommitCard = ({ commit: { author: { name }, message, comment_count } , comments_url, html_url, sha }) => (
	<Container>
		<Content>
			<Name>
				<a href={html_url} target="_blank">{name}</a>
			</Name>
			<Description>
				<DescriptionText>{message}</DescriptionText>
			</Description>
			<Stats>
				{renderInfo("sha", sha)}
				{renderInfo("Comments", comment_count)}
			</Stats>
		</Content>
	</Container>
);


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


	State:

		commits:
			ArrayOf(<Object> {
				author: <Object> {login: <String>, avatar_url: <String> }
				comments_url: <String>
				html_url: <String>
				sha: <String>
			})

*/

class Results extends React.Component {
	constructor(props) {
		super(props);

		this.state = { commits: [] };
	}
	viewCommits = (org, repo) => {
		fetchCommits(org, repo).then(commits => this.setState({ commits }));
	}

	renderRepoCard = repository => {
		return <RepoCard {...repository} key={repository.full_name} viewCommits={this.viewCommits} />
	}

	renderCommitCard = commit => {
		console.log(commit)
		return <CommitCard {...commit} key={commit.sha} />
	}

	render() {
		if (this.state.commits.length) {
			return (
				<React.Fragment>
					<Title>Commits</Title>
					<Cards>
						{this.state.commits.map(this.renderCommitCard)}
					</Cards>
				</React.Fragment>
			);
		}


		return (
			<React.Fragment>
				<Title>Repositories</Title>
				<Cards>
					{this.props.repositories.map(this.renderRepoCard)}
				</Cards>
			</React.Fragment>
		);
	}
}

export default Results;