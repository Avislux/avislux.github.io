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
        narrow.foundItems = [];
        narrow.getMatchedMenuItems = function(){

            var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
            promise.then(function(items){
                narrow.foundItems = items;
                console.log("narrow.founditems", narrow.foundItems);
                }
            );

        };

        narrow.removeItem = function(index){
            narrow.foundItems.splice(index, 1);
            console.log("Deleted ", index, "array: ", narrow.foundItems);
        };

        narrow.error = function () {
            //console.log("error check items:", narrow.items == [ ], narrow.items,narrow.items.length );
            return ( narrow.items.length == 0 );
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
                console.log("result.data:  ",result.data);
                //console.log(result.data.menu_items[0]);
                //var foundItems = [];
                if (searchTerm == ''){return [];}
                var foundItems = result.data.menu_items.filter(
                    function(item){
                        return item.description.search(searchTerm) != -1;
                    }
                );
                /*for(var i=0; i < result.data.menu_items.length; i++){
                    if (result.data.menu_items[i].description.search(searchTerm) != -1){
                        console.log(result.data.menu_items[i]);
                        foundItems.push(result.data.menu_items[i]);
                    }
                    else{
                        result.data.menu_items.splice(i,1);
                    }
                }*/
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

