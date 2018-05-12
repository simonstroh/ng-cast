angular.module('video-player')

  .component('app', {
  // TODO
    controller: function(youTube, youTubeDetails) {
      this.videoData = window.exampleVideoData;
      this.videoIdForDetails = this.videoData[0].id.videoId;
      this.playerUrl = 'https://www.youtube.com/embed/' + this.videoData[0].id.videoId;
      this.playerTitle = this.videoData[0].snippet.title;
      this.playerDescription = this.videoData[0].snippet.description;
      // this.theFullCrazyDescription = '';

      this.handleClickInParent = (index) => {
        this.videoIdForDetails = this.videoData[parseInt(index)].id.videoId;
        this.playerUrl = 'https://www.youtube.com/embed/' + this.videoData[parseInt(index)].id.videoId;
        this.playerTitle = this.videoData[parseInt(index)].snippet.title;
        this.playerDescription = this.videoData[parseInt(index)].snippet.description;
      };

      this.handleInputInParent = (input) => {
        var prompt = { part: 'snippet', key: window.YOUTUBE_API_KEY, type: 'video', videoEmbeddable: 'true' };
        prompt.q = input;
        youTube.result(prompt, this.updateData);
      };

      this.makeDescriptionCrazy = (videoId) => {
        var options = { part: 'snippet', id: videoId, key: window.YOUTUBE_API_KEY };
        console.log(videoId);
        youTubeDetails.result(options, this.newCallback);
        // this.playerDescription = this.theFullCrazyDescription;
        // console.log(this.playerDescription);
      };

      this.updateData = (data) => {
        this.videoData = data.data.items;
        this.videoIdForDetails = this.videoData[0].id.videoId;
        this.playerUrl = 'https://www.youtube.com/embed/' + this.videoData[0].id.videoId;
        this.playerTitle = this.videoData[0].snippet.title;
        this.playerDescription = this.videoData[0].snippet.description;
      };

      this.newCallback = (parameter) => {
        // this.theFullCrazyDescription = parameter.data.items[0].snippet.description;
        this.playerDescription = parameter.data.items[0].snippet.description;
        console.log(parameter);
      };
    },
  
    templateUrl: 'src/templates/app.html'
  });
