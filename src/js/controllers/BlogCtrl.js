app.controller('BlogCtrl', ['$scope', 'blogPostService', function($scope, blogPostService) {
  $scope.posts = blogPostService.posts();
}]);
