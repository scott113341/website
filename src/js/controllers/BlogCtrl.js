app.controller('BlogCtrl', ['$scope', 'BlogPostService', function($scope, BlogPostService) {

  $scope.posts = BlogPostService.posts();

}]);
