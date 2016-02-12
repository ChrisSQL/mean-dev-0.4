'use strict';

angular.module('users').controller('ViewProfileController', ['$scope', '$http', '$resource', '$location', 'Users', 'Authentication', '$stateParams', 'Savings', 'Coupons', 'Posts',
    function ($scope, $http, $resource, $location, Users, Authentication, $stateParams, Savings, Coupons, Posts) {

        $scope.authentication = Authentication;
        $scope.user = Authentication.user;

        $http.get('api/users/' + $stateParams.userId).success(function (data) {
            $scope.profile = data;
        });

        $http.get('savings/usersSavingsPostedTotal/' + $stateParams.userId).success(function (data1) {
            $scope.savingsByUser = data1;
            $scope.upvotesCount = $scope.savingsByUser[0].upVoters.length;

        });

        $http.get('savings/usersUpvotesTotal/' + $stateParams.userId).success(function (data4) {
            $scope.upvotesToUser = data4;
        });

        $http.get('coupons/usersCouponsPostedTotal/' + $stateParams.userId).success(function (data2) {
            $scope.couponsByUser = data2;
        });

        $http.get('posts/usersCommentsPostedTotal/' + $stateParams.userId).success(function (data3) {
            $scope.commentsByUser = data3;
        });


        $scope.capatilize = function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };

        $scope.myPage = false;
        if ($stateParams.userId === $scope.authentication.user._id) {
            $scope.myPage = true;
        }



    }
]);
