'use strict';

angular.module('users').controller('ChangePasswordController', ['$state', '$scope', '$http', 'Authentication',
  function ($state, $scope, $http, Authentication) {
    $scope.user = Authentication.user;
    $scope.authentication = Authentication;

      if ($scope.authentication.user.passwordChanged === 'false') {

          $scope.passwordDetails = {
              currentPassword: 'changeme'
          };

      }


  

    // Change user password
    $scope.changeUserPassword = function (isValid) {
      $scope.success = $scope.error = null;



      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'passwordForm');

        return false;
      }

      $http.post('/api/users/password', $scope.passwordDetails).success(function (response) {
        // If successful show success message and clear form
        $scope.$broadcast('show-errors-reset', 'passwordForm');
        $scope.success = true;
        $scope.passwordDetails = null;
          $state.go('home');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);
