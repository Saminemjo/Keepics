angular.module('app')
    .controller('ProfileController', function($scope, $http, $stateParams, UserService) {
        console.log($stateParams.name);
        UserService.getName($stateParams.name).then(function(res) {
            $scope.user = res.data;

            $scope.getClass = function getClass(index) {
                if ($scope.user.pictures[index].likers.indexOf($scope.user.name) !== -1) {
                    return "material-icons md-10 right red-text";
                }else{
                  return "material-icons md-10 right";
                }
            };
            $scope.like = function(index) {
                if ($scope.user.pictures[index].likers.indexOf($scope.user.name) === -1) {
                    $scope.liked = index;
                    $scope.user.pictures[index].likers.push($scope.user.name);
                    $scope.user.pictures[index].likes++;
                    return true;
                } else {
                    $scope.liked = false;
                    $scope.user.pictures[index].likers.splice($scope.user.pictures[index].likers.indexOf($scope.user.name), 1);
                    $scope.user.pictures[index].likes--;
                    return false;
                }
            };
            $scope.openLink = function(index) {
                window.open($scope.user.pictures[index].url, 'Mon image', 'menubar=no, scrollbars=no, top=200, left=200, width=600, height=400');
            };
        });
    });
