angular.module('video-player')

  .component('videoListEntry', {
  // TODO
    bindings: {
      eachEntry: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
