(function () {
    'use strict';

    angular.module('Data')
        .controller('ItemController', ItemController);


    ItemController.$inject = ['items'];
    function ItemController(items) {
        console.log("item Controller Init");
        var itemCtrl = this;
        console.log("itemctrl item", item);
        itemCtrl.items = items;
        console.log("Controller itemctrl.items", itemCtrl.items);
        //
    }

})();