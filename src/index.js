// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import apiKey from './config/youtube.js';

ReactDOM.render(<App searchYouTube={searchYouTube} apiKey={apiKey}/>, document.getElementById('app'));