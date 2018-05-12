angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    url: '<',
    title: '<',
    description: '<',
    id: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
