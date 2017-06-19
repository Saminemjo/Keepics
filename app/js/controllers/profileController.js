angular.module('app')
    .controller('ProfileController', function($scope, $http, CurrentUser, $stateParams, UserService) {
        UserService.getName($stateParams.name).then(function(res) {
            $scope.user = res.data;

            $scope.getClass = function(index) {
                if ($scope.user.pictures[index].likers.indexOf($scope.user.name) !== -1) {
                    return "material-icons md-10 right red-text";
                } else {
                    return "material-icons md-10 right";
                }
            };
            for (var i = 0; i < $scope.user.pictures.length; i++) {
              $scope.user.pictures[i].commentR="";
            }
            var date = new Date();
            console.log($scope.user);
            $scope.addComment = function(index) {
                console.log($scope.user.pictures[index].commentR);
                var comment = {
                    author: CurrentUser.user().name,
                    text: $scope.user.pictures[index].commentR,
                    date: date
                };
                $scope.user.pictures[index].comments.push(comment);
                UserService.update($scope.user._id, $scope.user).then(function() {
                    UserService.getName($stateParams.name).then(function(res) {
                        $scope.user = res.data;
                        $scope.user.pictures[index].commentR = "";
                    });
                });
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
