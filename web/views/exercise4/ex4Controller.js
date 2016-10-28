var controllers = angular.module('ex4Controller', []);

controllers.controller('countryDataController', ["countryData", "$scope", function (countryData, $scope) {

        $scope.allCountries;
        $scope.africanCountries;
        $scope.countryByCode;

        countryData.getAllCountries().then(function (val) {
            $scope.allCountries = val;
        });

        countryData.getCtrInReg().then(function(val){
            $scope.africanCountries = val;
        });
        
        countryData.getCtrByCode().then(function(val){
            $scope.countryByCode = val;
        });
    }]);
