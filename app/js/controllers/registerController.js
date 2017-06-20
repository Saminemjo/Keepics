angular.module('app')
    .controller('RegisterController', function($scope, $location, Auth) {
        $scope.register = function() {
            Auth.register($scope.user).then(function() {
                $location.path('user/profile/' + $scope.nameSearch);
            });
        };
    });
