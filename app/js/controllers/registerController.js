angular.module('app')
    .controller('RegisterController', function($scope, $location, Auth) {
        $scope.register = function() {
            Auth.register($scope.user).then(function(result) {
                $location.path('user/profile/' + result.data.user.name);
            });
        };
    });
