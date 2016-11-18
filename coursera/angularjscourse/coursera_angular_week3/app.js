(function(){

    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController',NarrowItDownController)
        .service("MenuSearchService",MenuSearchService)
        .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com/menu_items.json")
        .directive("foundItems", FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController (MenuSearchService) {
        var narrow = this;
        narrow.searchTerm = "";

        narrow.getMatchedMenuItems = function(){

            var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
            console.log("promise", promise, promise.$$state);
            narrow.foundItems = promise;

        };

        narrow.removeItem = function(index){
            narrow.foundItems.splice(index, 1);
        };

        narrow.error = function () {
            //console.log(NarrowItDownController.searchTerm == "", searchTerm);
            //console.log(NarrowItDownController.foundItems == [],NarrowItDownController.foundItems);
            return (narrow.searchTerm == "" || narrow.foundItems == [] )
        };

    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function  MenuSearchService($http, ApiBasePath){
       var service = this;
        service.getMatchedMenuItems = function (searchTerm){
            return $http({
                    method:"GET",
                    url:(ApiBasePath)
                }

            ).then(function (result) {
                console.log(searchTerm);
                console.log(result.data);
                //console.log(result.data.menu_items[0]);
                var foundItems = [];
                for(var i=0; i < result.data.menu_items.length; i++){
                    if (result.data.menu_items[i].description.search(searchTerm) != -1){
                        console.log(result.data.menu_items[i]);
                        foundItems.push(result.data.menu_items[i]);
                    }
                }
                console.log("found items: ", foundItems);

                return foundItems;
            });
        };

    }

    function FoundItemsDirective(){
        var ddo = {
            templateUrl: 'template.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'narrow',
            bindToController: true
        };

        return ddo;
    }

})();

