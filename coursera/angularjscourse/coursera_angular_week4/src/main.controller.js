(function () {
    'use strict';

    angular.module('Data')
        .controller('MainController', MainController);


    MainController.$inject = ['MenuDataService', 'categories'];
    function MainController(MenuDataService, categories) {
        console.log("Main Controller Init");
        var main = this;
        //main.categories = categories;
        var promise = MenuDataService.getAllCategories();
        promise.then(function(categories){
            console.log("controller promise.then", categories);
            main.categories = categories;
            }
        );

        console.log("Controller main.categories", main.categories);
        //
    }

})();