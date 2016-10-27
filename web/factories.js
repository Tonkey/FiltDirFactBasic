angular.module('factories', [])
        .factory('countryData', ['$http', function ($http) {

                var countryData = {};

                countryData.getAllCountries = function () {
                    return $http.get("https://restcountries.eu/rest/v1/all");
                };

                countryData.getCtrInReg = function(){
                    return $http.get("https://restcountries.eu/rest/v1/region/africa");
                };

                countryData.getCtrByCode = function(){
                    return $http.get("https://restcountries.eu/rest/v1/alpha?codes=gb");
                };
                
                return countryData;

            }]);