(function () {
    'use strict';

    angular.module('Data')
        .controller('MainController', MainController);


    MainController.$inject = ['MenuDataService', 'categories'];
    function MainController(MenuDataService, categories) {
        console.log("Main Controller Init");
        var main = this;
        main.categories = categories;
    }

})();