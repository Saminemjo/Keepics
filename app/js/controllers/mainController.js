angular.module('app')
    .controller('MainController', function($scope, CurrentUser, UserService) {
        $(document).ready(function() {
            $('.modal').modal();
        });

        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
            console.log($scope.user);
            $scope.openLink = function(index) {
                window.open($scope.user.pictures[index].url, 'Mon image', 'menubar=no, scrollbars=no, top=200, left=200, width=600, height=400');
            };
            $scope.copyLink = function() {
                prompt('Press Ctrl + C, then Enter to copy to clipboard and share your link', 'http://localhost:8000/#!/profile/' + $scope.user.name);
            };
            $scope.removePic = function(index) {
                $scope.user.pictures.splice(index, 1);
                UserService.update(CurrentUser.user()._id, $scope.user).then(function() {
                    $scope.user = res.data;
                });
            };
            $scope.newPic = {};
            console.log($scope.user);
            $scope.addPic = function() {
                $scope.user.pictures.push($scope.newPic);
                UserService.update(CurrentUser.user()._id, $scope.user).then(function() {
                        $scope.user = res.data;
                    })
                    .then(function() {
                        $('#modal1').modal('close');
                    });
                $scope.newPic = {};
            };
        });

    });
