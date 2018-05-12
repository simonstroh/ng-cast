angular.module('video-player')

  .component('app', {
  // TODO
    controller: function(youTube, youTubeDetails) {
      this.videoData = window.exampleVideoData;
      this.videoIdForDetails = this.videoData[0].id.videoId;
      this.playerUrl = 'https://www.youtube.com/embed/' + this.videoData[0].id.videoId;
      this.playerTitle = this.videoData[0].snippet.title;
      this.playerDescription = this.videoData[0].snippet.description;
      this.autoplay = 'true';
      this.shortDescription = this.videoData[0].snippet.description;
      this.detailIsOpen = false;

      this.handleClickInParent = (index) => {
        this.videoIdForDetails = this.videoData[parseInt(index)].id.videoId;
        if (this.autoplay === 'true') {
          this.playerUrl = 'https://www.youtube.com/embed/' + this.videoData[parseInt(index)].id.videoId + '?autoplay=1';
        } else {
          this.playerUrl = 'https://www.youtube.com/embed/' + this.videoData[parseInt(index)].id.videoId;
        }
        this.playerTitle = this.videoData[parseInt(index)].snippet.title;
        this.playerDescription = this.videoData[parseInt(index)].snippet.description;
      };

      this.changesAutoplay = () => {
        if (this.autoplay === 'true') {
          this.autoplay = 'false';
        } else {
          this.autoplay = 'true';
        }
      };

      this.handleInputInParent = (input) => {
        var prompt = { part: 'snippet', key: window.YOUTUBE_API_KEY, type: 'video', videoEmbeddable: 'true' };
        prompt.q = input;
        youTube.result(prompt, this.updateData);
      };

      this.makeDescriptionCrazy = (videoId) => {
        if (this.detailIsOpen) {
          this.playerDescription = this.shortDescription;
          this.detailIsOpen = false;
        } else {
          var options = { part: 'snippet', id: videoId, key: window.YOUTUBE_API_KEY };
          youTubeDetails.result(options, this.newCallback);
        }
      };

      this.updateData = (data) => {
        this.videoData = data.data.items;
        this.videoIdForDetails = this.videoData[0].id.videoId;
        if (this.autoplay === 'true') {
          this.playerUrl = 'https://www.youtube.com/embed/' + this.videoData[0].id.videoId + '?autoplay=1';
        } else {
          this.playerUrl = 'https://www.youtube.com/embed/' + this.videoData[0].id.videoId;
        }
        this.playerTitle = this.videoData[0].snippet.title;
        this.playerDescription = this.videoData[0].snippet.description;
      };

      this.newCallback = (parameter) => {
        this.detailIsOpen = true;
        this.shortDescription = this.playerDescription;
        this.playerDescription = parameter.data.items[0].snippet.description;
      };
      
      this.handleInputInParent('Space Oddity Chris Hadfield');
    },
  
    templateUrl: 'src/templates/app.html'
  });
