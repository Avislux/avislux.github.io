(function(){

    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController',ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
        .service("ShoppingListCheckoffService",ShoppingListCheckoffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckoffService'];
    function ToBuyShoppingController (ShoppingListCheckoffService) {
        var showList = this;
        showList.items = ShoppingListCheckoffService.getItems();

        showList.buyItem = function(itemIndex){
            ShoppingListCheckoffService.buyItem(itemIndex);

    };
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckoffService'];
    function AlreadyBoughtShoppingController (ShoppingListCheckoffService) {
        var showList = this;
        showList.items = ShoppingListCheckoffService.getBoughtItems();


    }

    function  ShoppingListCheckoffService(){
       var service = this;
       var items = [{ name: "cookies", quantity: 10 },
           { name: "noodles", quantity: 1 },
           { name: "bread", quantity: 1 },
           { name: "eggs", quantity: 12 },
           { name: "milk", quantity: 1 }    ];
        var boughtItems = [];

        service.getItems = function (){
            return items;
        };
        service.getBoughtItems = function (){
            return boughtItems;
        };
        service.buyItem = function(itemIndex){
            boughtItems.push(items[itemIndex]);
            items.splice(itemIndex,1);

        };
    }

})();

