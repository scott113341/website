app.controller('BlogPostCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.blogPost = function() {
    return '/blog/' + $routeParams.post + '.html';
  };
}]);
