(function(){
    var app = angular.module("app");

    app.controller("CustomersController", ["functionService", function(functionService){
        this.customers = customers;
        this.removeCustomer = function(index){
            this.customers.splice(index, 1);
        }

        this.isListVisible = true;
        this.toggleList = function(){
            this.isListVisible = this.isListVisible ? false : true;
        }

        this.addCustomer = function(){
            this.customers.push(
                {
                    name: "Jane",
                    city: "Rome",
                    age: functionService.getRandomNumber(18, 100),
                    avatar: "no-avatar.jpg"
                });
        }
    }]);

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