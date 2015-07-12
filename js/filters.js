(function() {
    angular
        .module("appFilters", [])
        .filter("user", userFilter);

    function userFilter() {
        return function(input) {
            return "User: " + input;
        }
    }
})();