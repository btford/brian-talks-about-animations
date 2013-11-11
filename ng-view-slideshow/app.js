angular.module('mySlideshow', [
  'ngAnimate',
  'ngRoute'
]).

config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/slide/:number', {
      templateUrl: function (params) {
        return '/slides/slide-' + params.number + '.html';
      }
    })
    .otherwise({
      redirectTo: '/slide/1'
    });

  $locationProvider.html5Mode(true);
});
