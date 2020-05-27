var searchYouTube = (options, callback) => {
  // TODO
  //console.log('API hit');
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    type: 'video',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    videoEmbeddable: true
  })
    .done((data) => {
      callback(data.items);
    });
  // .fail(function(error) {
  //   console.error('YouTube Search: Failed to search: ', error);
  // });
};

export default searchYouTube;