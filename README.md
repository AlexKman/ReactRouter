This is a repository I am using to demonstrate and learn about everything that React-Router has to offer

Within this repository I am attempting to replicate the [https://www.twitch.tv/] functionality and layout. Twitch uses a complex routing system however I will be using react router to replicate this as effectively as possible.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Some of the links and resources that I am using

- https://redux.js.org/introduction/getting-started
- https://reactjs.org/
- https://react-redux.js.org/using-react-redux/connect-mapstate
- https://github.com/reduxjs/redux-thunk
- https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow
- https://devhints.io/redux
- https://lodash.com/
- https://developer.mozilla.org/en-US/
- https://github.com/illuspas/Node-Media-Server

### `To run this project`

1. You must have node installed on your machine. Install the relevant node packages within the root file with npm install
2. Run npm start within the root of the solution
3. Run npm start within the /api folder
4. View the project running on [http://localhost:3000/]

This project is capable of running a stream through OBS (Open Broadcasting System) however this is not needed for the project to run. The details to run a stream through this project are detailed below. I do not expect anybody to run a stream through this project as it requires some knowledge of OBS and streaming but... anyway.

1. You must have [OBS](https://obsproject.com/) installed. Latest version is fine :)
2. Within OBS, navigate to Settings -> Stream and set your Service to 'Custom...'
3. Set your server to "rtmp://localhost/live" and your stream key to the relevant stream within the list in the project, first item would be 1 for example.
4. Within your code terminal navigate to the server folder and run npm install and npm start to run the node media server.
5. From within OBS create a Stream Scene with any type of component, for example, add a source of Image and any image from your pc
6. Now, by clicking the start streaming button within OBS, there should be a running stream on the video player to the relevant stream page - eg http://localhost:3000/streams/1
