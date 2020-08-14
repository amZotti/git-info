# Getting Started

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



# Test Cases

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


# Technical Considerations

### API

There was a choice between using Github's conventional REST API or their newer GraphQL API. I did a fair amount of research on both approaches and ultimately felt that the small scale of this project didn't justify all the setup that GraphQL would impose. Instead I opted to use the conventional REST API with a wrapper (`@octokit/rest`). I made a "transport layer", which is simply a pseudo-service where I keep my API logic (`src/transport.js`).

### Styles

Used minimal traditional CSS and opted instead to use styled-components. Styled-components allow for semantic and easy to understand markup. Colocating markup/styles/js allows me to focus more on developing features rather than managing technologies. 

### Main View

There are three main view states:

1. Introduction
2. Error
3. Results

Results subdivides into two types:
	1. Repository display
	2. Commit display

### Things to improve

Given the time constraints specified - there is still plenty to improve. Below is a brief list of the most obvious things for me to fix assuming there was more time.


	1. Remove deadcode
		- Random trash that came along with `create-react-app`, (pngs, webworkers, etc)
	2. Further modularize `Results.js`
			- Put 2 kinds of card views into distinct files
	3. Handle transition states using React Router 
		- Applies most keenly to "Back" buttons in the Results view
	4. Make it so the left-hand inbox bounce uses a debounced automatic lookup instead of having to manually press enter
		- searches for results 300ms or so after a user stops
	5. Convert manual test cases specified in README into actual automatic test cases
	6. Single Warning in console relating to the use of the href attribute in Results.js line 75


# UI/UX Considerations

Initially I began testing different color schemas and thinking of optimal page layouts. For the sake of brevity, I decided to just mimic the look and feel of Github as best as possible given limited time. Overall, I think the UI/UX looks quite polished given the time spent on it. The only thing I would change is to make it so the left-hand text box is debounced instead of requiring an enter keystroke. Also, I feel like the left hand side is a bit empty - I considered doing an additional API call to retrieve metadata regarding the logged in user and putting some of that metadata in the blank area (Think like a profile card), but decided against it due to the time constraints.




