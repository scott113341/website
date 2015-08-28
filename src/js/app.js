var app = angular.module('website', ['ngRoute', 'angulartics', 'angulartics.google.analytics']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'build/templates/home.html',
        controller: 'HomeCtrl'
      })
      .when('/projects', {
        templateUrl: 'build/templates/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/blog', {
        templateUrl: 'build/templates/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/blog/:post', {
        templateUrl: 'build/templates/blog-post.html',
        controller: 'BlogPostCtrl'
      })
      .when('/resume', {
        templateUrl: 'build/templates/resume.html',
        controller: 'ResumeCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
}]);
