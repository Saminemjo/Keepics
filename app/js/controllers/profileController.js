angular.module('app')
    .controller('ProfileController', function($scope, $http, $stateParams, UserService) {
    console.log($stateParams.id);
UserService.getOne($stateParams.id).then(function(res){
$scope.user = res.data;
});
    });
