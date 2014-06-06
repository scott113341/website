var app = angular.module('website', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      })
      .when('/projects', {
        templateUrl: 'templates/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/blog', {
        templateUrl: 'templates/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/blog/:post', {
        templateUrl: 'templates/blog-post.html',
        controller: 'BlogPostCtrl'
      })
      .when('/resume', {
        templateUrl: 'templates/resume.html',
        controller: 'ResumeCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
}]);
