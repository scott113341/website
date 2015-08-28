app.controller('NavCtrl', ['$scope', '$location', function($scope, $location) {

  $scope.links = [
    {
      name: 'Home',
      href: '/#/',
      path: '/'
    },
    {
      name: 'Projects',
      href: '/#/projects',
      path: '/projects'
    },
    {
      name: 'Blog',
      href: '/#/blog',
      path: '/blog'
    },
    {
      name: 'Résumé',
      href: '/#/resume',
      path: '/resume'
    }
  ];

  $scope.isActive = function (path) {
    return path.split('/')[1] === $location.path().split('/')[1];
  };

}]);
