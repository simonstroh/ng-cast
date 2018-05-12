angular.module('video-player')
  .service('youTubeDetails', function($http) {
  // TODO
    this.result = function(params, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: params
      }).then(function(data) {
        callback(data);
      }, function(data) {
        console.log('That error message though.');
      });
    };
  });
