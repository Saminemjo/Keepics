angular.module('app')
    .controller('MainController', function($scope, CurrentUser, UserService) {
        $(document).ready(function() {
            $('.modal').modal();
        });
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;

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
            };
        });

    });
