angular.module('services', [])
        .service('randService',function () {
            
            this.getRandomString = function (n){
                return new Array(n+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, n);
            };
            
            this.getRandomNumber = function (n){
                return Math.floor((Math.random()*n) + 1);
            };
        });