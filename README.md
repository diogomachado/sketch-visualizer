# Getting Started

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Because it includes (typescript, jest, test-library and a initial configuration)
- Added .editorconfig to hold the project protected of different IDE configurations
- The library `react-router-dom@6` was used to provide the capatility of have two routes

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Notes

- `<React.StrictMode>` will execute twice `useEffect` in dev environment
- I decided to use simple CSS in this case, but I like to work with SASS for cases more complex

## Improvements

- Add SEO title and tags
- We could set breakpoints media-queries adapting the software better on common screens
- Add one shimmer effect to provide a better UX experience in the page loading
- `artboard-navigation` could be a component separated
- I don't like the code 7 to 34 in the component HeaderArtboard.tsx, I can improve this better with a code more clean
- I would to create integrations tests using MirageJS a fake database, and then we not depents into a external data like the GraphqlQL
- I'd like also to add one useContext to share the artboards between the components without passing callback child to parent
- Yes, I could to use more the power of typescript, but I decided for a solution more easy