app.controller('ProjectsCtrl', ['$scope', 'projectService', function($scope, projectService) {
  $scope.projects = projectService.projects();
}]);
