angular.module('MyApp', ['ngRoute', 'filters', 'directives', 'services', 'factories'])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'pages/home.html',
                        controller: 'DirectiveController'

                    })
                    .when('/exercise1a', {
                        templateUrl: 'pages/schoolChildren.html',
                        controller: 'MyController',
                        controllerAs: 'myCtrl'
                    })
                    .when('/exercise2a', {
                        templateUrl: 'pages/companyInfo.html',
                        controller: 'DirectiveController'
                    })
                    .when('/exercise2b', {
                        templateUrl: 'pages/gallery.html'
                    })
                    .when('/exercise3', {
                        templateUrl: 'pages/randNumString.html',
                        controller: 'randomGenController'
                    })
                    .when('/exercise4a', {
                        templateUrl: 'pages/allCountries.html',
                        controller: 'countryDataController'
                    })
                    .when('/exercise4b', {
                        templateUrl: 'pages/countryByRegion.html',
                        controller: 'countryDataController'
                    })
                    .when('/exercise4c', {
                        templateUrl: 'pages/countriesByCode.html',
                        controller: 'countryDataController'
                    });
        })

        .controller('MyController', [function () {
                var self = this;
                self.persons = [
                    {name: 'Hans', gender: 'male', age: 8}, {name: 'Grethe', gender: 'female', age: 7},
                    {name: 'Frederik', gender: 'male', age: 61}, {name: 'Hassan', gender: 'male', age: 13},
                    {name: 'Karen', gender: 'female', age: 31}];
            }])
        .controller('DirectiveController', ['$scope', function ($scope) {
                $scope.user = {
                    companyName: "Coolest Company on Earth",
                    companyUrl: "http://www.cool.cooler.com",
                    created: new Date()};
            }])
        .controller('randomGenController', ['randService', '$scope', function (randService, $scope) {
                $scope.getRandomString = function (n) {
                    return randService.getRandomString(n);
                };
                $scope.getRandomNumber = function (n) {
                    return randService.getRandomNumber(n);
                };
            }])
        .controller('countryDataController', ["countryData", "$scope", function (countryData, $scope) {

                $scope.allCountries;
                $scope.africanCountries;
                $scope.countryByCode;

                getAllCountries();
                getCtrByReg();
                getCtrByCode();

                function getAllCountries() {
                    countryData.getAllCountries()
                            .then(function (response) {
                                $scope.allCountries = response.data;
                            });
                }
                ;
                function getCtrByReg() {
                    countryData.getCtrInReg()
                            .then(function (response) {
                                $scope.africanCountries = response.data;
                            });
                }
                function getCtrByCode() {
                    countryData.getCtrByCode()
                            .then(function (response) {
                                $scope.countryByCode = response.data;
                            });
                }



            }])
        .controller('mainController', function ($scope) {
            $scope.message = 'Welcome to FilterDirectiveFactories exercise, please take you time and look around on the different pages :)';
            $scope.authorInf = 'this website was made by Nicklas Molving';
        });