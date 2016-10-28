var controllers = angular.module('ex3Controller', []);

controllers.controller('randomGenController', ['randService', '$scope', function (randService, $scope) {
        $scope.getRandomString = function (n) {
            return randService.getRandomString(n);
        };
        $scope.getRandomNumber = function (n) {
            return randService.getRandomNumber(n);
        };
    }]);
