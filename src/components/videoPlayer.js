angular.module('video-player')

  .component('videoPlayer', {
  // TODO
    bindings: {
      url: '<',
      title: '<',
      description: '<',
      id: '<',
      handleInputtyPut: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
