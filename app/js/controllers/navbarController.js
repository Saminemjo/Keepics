angular.module('app')
    .controller('NavbarController', function($scope, Auth, CurrentUser, UserService, $location) {
        $scope.isCollapsed = true;
        $scope.auth = Auth;
        $scope.user = CurrentUser.user();
        console.log($scope.user.name);
        $scope.goProfile = function() {
            $location.path('user/profile/' + $scope.user.name);
        };
        $scope.logout = function() {
            Auth.logout();
        };
        var users = {
            data: {}
        };
        UserService.getAll().then(function(res) {
            res.data.forEach(function(value) {
                users.data[value.name] = null;
            });

            $('input.autocomplete').autocomplete(users);
        });
        $scope.searchName = function() {
            $location.path('user/profile/' + $scope.nameSearch);
        };
    });
