var app = angular.module('miniProfile');
app.controller('mainCtrl', function($scope, mainService) {

    $scope.getUsers = function() {
        $scope.users = mainService.getUsers();
    }
    $scope.getUsers();
});
