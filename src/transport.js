import { Octokit } from "@octokit/rest";

const api = new Octokit({
	auth: "2fe3476f094ef534bf1012313335bd694373bb78",
	userAgent: 'git-info AppV1',
	baseUrl: 'https://api.github.com',
});


(async () => {

	const { data: pullRequest } = await api.pulls.get({
	  owner: "octokit",
	  repo: "rest.js",
	  pull_number: 123,
	});

	console.log("pullRequest: ", pullRequest);

})();

export default {
	Octokit,
};