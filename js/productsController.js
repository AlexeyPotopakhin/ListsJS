(function() {
    angular
        .module("app")
        .controller("ProductsController", ProductsController);

    ProductsController.$inject = ["commonFactory"];

    function ProductsController(commonFactory) {
        var vm = this;

        vm.products = products;
        vm.isListVisible = true;
        vm.toggleList = toggleList;
        vm.addProduct = addProduct;

        function addProduct() {
            vm.products.push({name: "Product", price: commonFactory.getRandomNumber(200, 900)});
        }

        function toggleList() {
            vm.isListVisible = vm.isListVisible ? false : true;
        }
    }

    var products = [
        {name: "Sony Xperia Z3+", price: 614},
        {name: "Sony Xperia Z3", price: 480},
        {name: "Sony Xperia Z3 Compact", price: 405},
        {name: "Motorola Moto X", price: 205}
    ];
})();