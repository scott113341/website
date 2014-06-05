var app = angular.module('website', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      })
      .when('/resume', {
        templateUrl: 'templates/resume.html',
        controller: 'ResumeCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
}]);
