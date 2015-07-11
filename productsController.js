(function(){
    var app = angular.module("app", ["appFilters"]);

    app.controller("ProductsController", ["functionService", function(functionService){
        this.products = products;

        this.isListVisible = true;
        this.toggleList = function(){
            this.isListVisible = this.isListVisible ? false : true;
        }

        this.addProduct = function(){
            this.products.push({name: "Product", price: functionService.getRandomNumber(200, 900)});
        }
    }]);

    var products = [
        {name: "Sony Xperia Z3+", price: 614},
        {name: "Sony Xperia Z3", price: 480},
        {name: "Sony Xperia Z3 Compact", price: 405},
        {name: "Motorola Moto X", price: 205}
    ];

    // Global function for all controllers
    app.factory('functionService', function(){
        return {
            getRandomNumber: function(min, max){
                return Math.random() * (max - min) + min;
            }
        };
    });
})();