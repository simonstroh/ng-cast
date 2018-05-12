angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = (params, callback) => {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: params
    }).then(function(data) {
      callback(data)
    }, function(data) {
      console.log("That error message though.", params)
    })
  }
});
