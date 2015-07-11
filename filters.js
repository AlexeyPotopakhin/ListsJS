(function(){
    var app = angular.module("appFilters", []);

    app.filter("user", function(){
        return function(input){
            return "User: " + input;
        }
    });
})();