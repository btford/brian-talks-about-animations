angular.module('myNotifications', [
  'ngAnimate'
]).
controller('NotificationsCtrl', function ($scope, $timeout) {
  $scope.alerts = [];

  $scope.addAlert = function () {
    if (!$scope.newAlert) {
      return;
    }
    $scope.alerts.push({
      text: $scope.newAlert
    });
    $scope.newAlert = '';
    $timeout(function () {
      if ($scope.alerts.length) {
        $scope.alerts.shift();
      }
    }, 3000);
  };

});
