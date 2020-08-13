import { Octokit } from "@octokit/rest";
import auth from "./secret.js";

const api = new Octokit({
	auth,
	userAgent: 'git-info App V1',
	baseUrl: 'https://api.github.com',
});



	/*
		Parameter:
			org: <String> -> Login name for a given organization

		Returns: 
			<Promise>
				Resolves to:
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
					    "watchers":  <Number>
					    "pushed_at": <String>,
					    "name": <String>,
					    "full_name": <String>,
					 }> )
	*/

export async function fetchOrganization(org) {
	const { data: { repos_url } } = await api.orgs.get({ org });
	const repos = await fetch(repos_url).then(data => data.json());
	return repos;
};

