var filters = angular.module('filters', []);

filters.filter('schoolAge', function () {
    
    return function(input){
        
        var out = [];
        
        angular.forEach(input, function(person){
            
            if(person.age <= 15 && person.age >= 6){
                out.push(person);
            }
        });
        return out;
    };
    
});