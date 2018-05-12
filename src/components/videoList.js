angular.module('video-player')

  .component('videoList', {
  // TODO
    bindings: {
      videos: '<',
      videoClicker: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
