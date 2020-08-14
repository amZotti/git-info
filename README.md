#Getting Started

### Setting authentication key

Setting your Github PAC (personal access token) is required to use the application.

Fortunately, acquiring your PAC is easy and fast - Instructions can be found [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

Once you have your PAC - there are two ways to set it.

1. In the root of the project directory, simply type  `SECRET=<your token here>`

2. Open /src/secret.js and change line 7 to read `const personalAccessToken = <your token here>;`


### Downloading dependencies

Type `yarn` from the root of the project directory. If this command is not found, run `brew install yarn`. See yarn [documentation](https://classic.yarnpkg.com/en/docs/install/#mac-stable) for further assistance. 


Running the app requires a minimum npm version of `5.2` and a minimum node version of `10.16.0`; This app was developed with `node=v11.12.0` and `npm=6.7.0`. 



### Running the app: `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.




#Test Cases

1. App should default to displaying an Introduction in the main pane, which provides brief instructions on how to use the app
	- External links to Github search should successfully redirect user in a new tab

2. Typing an invalid organization name into the left hand input and pressing enter should yield the error view

3. Typing into the left hand input should reset the error view back to the introduction view

4. Typing a valid organization name into the left hand input and pressing enter should yield the Results view
		- Results view should be scrollable
		- Results view should resize in a reasonable manner for different view port dimensions
		- Clicking "Back" should revert back to the Introduction
		- Modifying the left-hand input should reset the app back to the introduction view
		- Clicking on repository name link should direct the user to the corresponding github page
		- Clicking on "Commits" link should cause a list of commits to render
			- Clicking author username link should direct the user to the corresponding github page for that commit
			- Clicking "Back" should revert back to the organization results
