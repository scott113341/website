app.controller('BlogPostCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

  $scope.blogPost = function() {
    return '/build/blog/' + $routeParams.post + '.html';
  };

}]);
