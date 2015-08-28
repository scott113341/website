app.controller('ProjectsCtrl', ['$scope', 'ProjectService', function($scope, ProjectService) {

  $scope.projects = ProjectService.projects();

}]);
