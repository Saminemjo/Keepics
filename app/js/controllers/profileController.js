angular.module('app')
    .controller('ProfileController', function($scope, $http, CurrentUser, $stateParams, UserService) {
        UserService.getName($stateParams.name).then(function(res) {
            $scope.user = res.data;
            $scope.isAuthor = function() {
                if (CurrentUser.user().email === $scope.user.email) {
                    return true;
                }
            };
            $(document).ready(function() {
                $('.modal').modal();
            });
            $scope.openLink = function(index) {
                window.open($scope.user.pictures[index].url, 'Mon image', 'menubar=no, scrollbars=no, top=200, left=200, width=600, height=400');
            };
            $scope.copyLink = function() {
                prompt('Press Ctrl + C, then Enter to copy to clipboard and share your link', 'https://keepics.herokuapp.com/#!/profile/' + $scope.user.name);
            };
            $scope.removePic = function(index) {
                $scope.user.pictures.splice(index, 1);
                UserService.update(CurrentUser.user()._id, $scope.user).then(function() {
                    $scope.user = res.data;
                });
            };

            $scope.addPic = function() {
                $scope.newPic = {
                    likers: [],
                    likes: 0,
                    comments: [],
                    url: $scope.newPic.url,
                    description: $scope.newPic.description,
                    name: $scope.newPic.picname
                };
                $scope.user.pictures.push($scope.newPic);
                UserService.update(CurrentUser.user()._id, $scope.user).then(function() {
                        $scope.user = res.data;
                    })
                    .then(function() {
                        $('#modal1').modal('close');
                    });
            };
            $scope.getClass = function(index) {
                if ($scope.user.pictures[index].likers.indexOf(CurrentUser.user().name) !== -1) {
                    return "material-icons md-10 right red-text";
                } else {
                    return "material-icons md-10 right";
                }
            };
            for (var i = 0; i < $scope.user.pictures.length; i++) {
                $scope.user.pictures[i].commentR = "";
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
              console.log(CurrentUser.user().name);
                if ($scope.user.pictures[index].likers.indexOf(CurrentUser.user().name) === -1) {
                    $scope.liked = index;
                    $scope.user.pictures[index].likers.push(CurrentUser.user().name);
                    $scope.user.pictures[index].likes++;
                    UserService.update($scope.user._id, $scope.user).then(function() {
                        UserService.getName($stateParams.name).then(function(res) {
                            $scope.user = res.data;
                        });
                    });
                    return true;
                } else {
                    $scope.liked = false;
                    $scope.user.pictures[index].likers.splice($scope.user.pictures[index].likers.indexOf(CurrentUser.user().name), 1);
                    $scope.user.pictures[index].likes--;
                    UserService.update($scope.user._id, $scope.user).then(function() {
                      UserService.getName($stateParams.name).then(function(res) {
                        $scope.user = res.data;
                      });
                    });
                    return false;
                }
            };
            $scope.openLink = function(index) {
                window.open($scope.user.pictures[index].url, 'Mon image', 'menubar=no, scrollbars=no, top=200, left=200, width=600, height=400');
            };
        });
    });
