var controllers = angular.module('ex2Controller', []);

controllers.controller('DirectiveController', ['$scope', function ($scope) {
        $scope.user = {
            companyName: "Coolest Company on Earth",
            companyUrl: "http://www.cool.cooler.com",
            created: new Date()};
    }]);