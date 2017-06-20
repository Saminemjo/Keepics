angular.module('app')
    .controller('HomeController', function($scope, $location, Auth) {
        $scope.errors = [];

        $scope.login = function() {
            if ($scope.loginForm.$valid) {
                $scope.errors = [];
                Auth.login($scope.user).then(function(result) {
                    $location.path('user/profile/' + result.data.user.name);
                }).catch(function(err) {
                    $scope.errors.push(err);
                });
            }
        };
    });
