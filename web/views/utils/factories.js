angular.module('factories', [])
        .factory('countryData', ['$http', '$q', function ($http, $q) {

                var countryData = {};

                countryData.getAllCountries = function () {
                    var defer = $q.defer();
                    $http.get("https://restcountries.eu/rest/v1/all").then(function (response) {
                        defer.resolve(response.data); 
                    });
                    
                    return defer.promise;
                };

                countryData.getCtrInReg = function () {
                    var defer = $q.defer();
                    $http.get("https://restcountries.eu/rest/v1/region/africa").then(function (response){
                        defer.resolve(response.data);
                    });
                    return defer.promise;
                };

                countryData.getCtrByCode = function () {
                    var defer = $q.defer();
                    $http.get("https://restcountries.eu/rest/v1/alpha?codes=gb").then(function(response){
                        defer.resolve(response.data);
                    });
                    return defer.promise;
                };

                return countryData;

            }]);