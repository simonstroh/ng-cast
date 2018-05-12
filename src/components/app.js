angular.module('video-player')

  .component('app', {
  // TODO
    controller: function(youTube) {
      this.videoData = window.exampleVideoData;
      this.playerUrl = 'https://www.youtube.com/embed/' + this.videoData[0].id.videoId;
      this.playerTitle = this.videoData[0].snippet.title;
      this.playerDescription = this.videoData[0].snippet.description;
      this.handleClickInParent = (index) => {
        this.playerUrl = 'https://www.youtube.com/embed/' + this.videoData[parseInt(index)].id.videoId;
        this.playerTitle = this.videoData[parseInt(index)].snippet.title;
        this.playerDescription = this.videoData[parseInt(index)].snippet.description;
      };
      this.handleInputInParent = (input) => {
        var prompt = { part: 'snippet', key: window.YOUTUBE_API_KEY, type: 'video', videoEmbeddable: 'true' };
        prompt.q = input;
        youTube.search(prompt, this.updateData);
      };
      this.updateData = (data) => {
        this.videoData = data.data.items;
        this.playerUrl = 'https://www.youtube.com/embed/' + this.videoData[0].id.videoId;
        this.playerTitle = this.videoData[0].snippet.title;
        this.playerDescription = this.videoData[0].snippet.description;
      };
    },
  
    templateUrl: 'src/templates/app.html'
  });
