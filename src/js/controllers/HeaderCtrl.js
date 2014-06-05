app.controller('HeaderCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.header = function() {
    var header = 'SCOTT HARDY';
    var path = $location.path();

    if (path.length > 1) {
      var split = path.split('/');
      header += ' / ' + split[1].toUpperCase();
    }

    return header;
  };
}]);
