# About project
This project was created for educational purposes. 

Written using **React** and **TypeScript**.

To get jokes in JSON format was used [Chuck Norris API](https://api.chucknorris.io/) 

Application has the following features: 
- Ability to get a random joke.
- Ability to get a random joke from categories (Use API to get all available categories).
- Ability to get jokes by free text search.
- Any joke can be marked/unmarked as favourite.
- Jokes marked as favourite appear in the right section Favourite.
- Favourite jokes is available after reloading the page and stored in the browser.

#### Future Improvements

* Add a state manager to the implementation(for better testing functions and isolating state control logic)
* Improve the interaction process with manual joke search(Display message that no jokes were found)
* Add clearer typing and handling of server errors
* Improve accessibility with more WAI-ARIA

This project was bootstrapped with [Create React AppView](https://github.com/facebook/create-react-app).

### Prerequisites

First of all, you will need [Node.js](https://nodejs.org) of version `10.15.2` or compatible with it, [npm](https://www.npmjs.com/) version `6.14.4` or compatible, and [git](https://git-scm.com/downloads) `2.20.1` or compatible.

Check if everything is OK by running `npm -v`, `node -v` and `git --version` in the CLI

## Available Scripts

In the project directory, you can run:

### `npm i`
This command helps to install all the necessary dependencies from the `package.json` before another actions with the project

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build(predeploy)`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject` 

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

### `npm deploy` 

The `predeploy` script will run automatically before `deploy` is run.
This command allows you to deploy the project via **GitHub Pages** from the url with key `"homepage"` in `package.json`.

## Learn More

You can learn more in the [Create React AppView documentation](https://facebook.github.io/create-react-app/docs/getting-started).
