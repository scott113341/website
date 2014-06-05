var app = angular.module('website', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      })
      .when('/projects', {
        templateUrl: 'templates/projects.html'
      })
      .when('/blog', {
        templateUrl: 'templates/blog.html'
      })
      .when('/resume', {
        templateUrl: 'templates/resume.html',
        controller: 'ResumeCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
}]);
