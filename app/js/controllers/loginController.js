// angular.module('app')
//     .controller('LoginController', function($scope, $location, Auth) {
//         $scope.errors = [];
//         $scope.login = function() {
//             if ($scope.loginForm.$valid) {
//                 $scope.errors = [];
//                 Auth.login($scope.user).then(function(result) {
//                   console.log($scope.user);
//                   $location.path('user/profile/' + $scope.user.name);
//                 }).catch(function(err) {
//                     $scope.errors.push(err);
//                 });
//             }
//         };
//     });
