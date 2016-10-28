var controllers = angular.module('homeController', []);

controllers.controller('mainController', function ($scope) {
    $scope.message = 'Welcome to FilterDirectiveFactories exercise, please take you time and look around on the different pages :)';
    $scope.authorInf = 'this website was made by Nicklas Molving';
});