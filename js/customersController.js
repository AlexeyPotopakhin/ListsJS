(function() {
    angular
        .module("app")
        .controller("CustomersController", ["commonFactory", CustomersController]);

    function CustomersController(commonFactory) {
        var vm = this;

        vm.customers = customers;
        vm.removeCustomer = removeCustomer;
        vm.isListVisible = true;
        vm.toggleList = toggleList;
        vm.addCustomer = addCustomer;

        function removeCustomer(index) {
            vm.customers.splice(index, 1);
        }

        function toggleList() {
            vm.isListVisible = vm.isListVisible ? false : true;
        }

        function addCustomer() {
            vm.customers.push(
                {
                    name: "Jane",
                    city: "Rome",
                    age: commonFactory.getRandomNumber(18, 100),
                    avatar: "no-avatar.jpg"
                });
        }
    }

    var customers = [
        {
            name: "John",
            city: "New York",
            age: 23,
            avatar: "avatar-01.jpg"
        },
        {
            name: "Sam",
            city: "London",
            age: 25,
            avatar: "avatar-02.jpg"
        },
        {
            name: "Tom",
            city: "Paris",
            age: 21,
            avatar: "avatar-03.jpg"
        }
    ];
})();