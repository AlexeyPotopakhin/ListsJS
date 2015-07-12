(function() {
   angular
       .module("app")
       .factory("commonFactory", commonFactory);

   function commonFactory() {
       return {
           getRandomNumber: function(min, max) {
               return Math.random() * (max - min) + min;
           }
       };
   }
})();