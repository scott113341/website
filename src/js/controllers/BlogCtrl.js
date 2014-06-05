app.controller('BlogCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.post = $routeParams.post;

}]);
