// Import VideoList Var
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
// import all the video examples
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    this.onVideoClick = this.onVideoClick.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onSearchEntry = this.onSearchClick.bind(this);
    this.searchEntryDebounced = _.debounce(this.onSearchEntry, 1000);
  }

  onVideoClick(video) {
    // console.log(video);
    this.setState({
      currentVideo: video
    });
  }

  onSearchClick(input) {
    this.props.searchYouTube({
      key: this.props.apiKey,
      query: input,
      max: 5
    }, (data) => {
      this.setState({
        allVideos: data,
        currentVideo: data[0]
      });
    });
  }

  onSearchEntry(input) {
    this.props.searchYouTube({
      key: this.props.apiKey,
      query: input,
      max: 5
    }, (data) => {
      this.setState({
        allVideos: data,
        currentVideo: data[0]
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearchClick={this.onSearchClick} searchEntryDebounced={this.searchEntryDebounced}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} onVideoClick={this.onVideoClick}/>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.searchYouTube({
      key: this.props.apiKey,
      query: 'Basketball',
      max: 5
    }, (data) => {
      this.setState({
        allVideos: data,
        currentVideo: data[0]
      });
    });
    // console.log("did mount ran!");
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;