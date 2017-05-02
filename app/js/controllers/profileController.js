angular.module('app')
    .controller('ProfileController', function($scope, $http, $stateParams, UserService) {
    console.log($stateParams.id);
UserService.getOne($stateParams.id).then(function(res){
$scope.user = res.data;
});
$scope.openLink = function(index) {
    window.open($scope.user.pictures[index].url, 'Mon image', 'menubar=no, scrollbars=no, top=200, left=200, width=600, height=400');
};
    });
