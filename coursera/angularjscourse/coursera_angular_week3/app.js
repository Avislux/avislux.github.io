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
            var promise = MenuSearchService.getMatchedMenuItems();
            promise.then(function (result) {
                console.log(narrow.searchTerm);
                console.log(result.data);
                console.log(result.data.menu_items[0]);
                var foundItems = [];
                for(var i=0; i < result.data.menu_items.length; i++){
                    if (result.data.menu_items[i].description.search(narrow.searchTerm) != -1){
                        console.log(result.data.menu_items[i]);
                        foundItems.push(result.data.menu_items[i]);
                    }
                }
                console.log("found items: ", foundItems);
                narrow.foundItems = foundItems;
                return foundItems;
            });

        };

        narrow.removeItem = function(index){
            narrow.foundItems.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function  MenuSearchService($http, ApiBasePath){
       var service = this;
        service.getMatchedMenuItems = function (){
            return $http({
                    method:"GET",
                    url:(ApiBasePath)
                }

            )
        };

    }

    function FoundItemsDirective(){
        var ddo = {
            templateUrl: 'template.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowDownDirectiveController,
            controllerAs: 'narrowD',
            bindToController: true
        };

        return ddo;
    }
    function NarrowDownDirectiveController() {
        var narrowD = this;
        var searchTerm = NarrowItDownController.searchTerm;
        narrowD.error = function () {
            console.log(NarrowItDownController.searchTerm == "", searchTerm);
            console.log(NarrowItDownController.foundItems == [],NarrowItDownController.foundItems);
            return (NarrowItDownController.searchTerm == "" || NarrowItDownController.foundItems == [] )
        };


    }


})();

