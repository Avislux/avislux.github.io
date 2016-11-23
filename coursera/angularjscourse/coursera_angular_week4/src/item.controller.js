(function () {
    'use strict';

    angular.module('Data')
        .controller('ItemController', ItemController);


    ItemController.$inject = ['items'];
    function ItemController(items) {
        console.log("item Controller Init");
        var itemCtrl = this;
        console.log("itemctrl item", items.menu_items);
        itemCtrl.category = items.category;
        itemCtrl.items = items.menu_items;
        console.log("Controller itemctrl.items", itemCtrl.items);
        //
    }

})();