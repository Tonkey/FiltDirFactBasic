angular.module('MyApp', [
    'ngRoute',
    'filters',
    'directives',
    'services',
    'factories',
    'homeController',
    'ex1Controller',
    'ex2Controller',
    'ex3Controller',
    'ex4Controller'
    ])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/home/home.html',
                        controller: 'DirectiveController'

                    })
                    .when('/exercise1a', {
                        templateUrl: 'views/exercise1/schoolChildren.html',
                        controller: 'MyController',
                        controllerAs: 'myCtrl'
                    })
                    .when('/exercise2a', {
                        templateUrl: 'views/exercise2/companyInfo.html',
                        controller: 'DirectiveController'
                    })
                    .when('/exercise2b', {
                        templateUrl: 'views/exercise2/gallery.html'
                    })
                    .when('/exercise3', {
                        templateUrl: 'views/exercise3/randNumString.html',
                        controller: 'randomGenController'
                    })
                    .when('/exercise4a', {
                        templateUrl: 'views/exercise4/allCountries.html',
                        controller: 'countryDataController'
                    })
                    .when('/exercise4b', {
                        templateUrl: 'views/exercise4/countryByRegion.html',
                        controller: 'countryDataController'
                    })
                    .when('/exercise4c', {
                        templateUrl: 'views/exercise4/countriesByCode.html',
                        controller: 'countryDataController'
                    });
        });
        