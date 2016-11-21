(function(){
    'use strict';
    angular.module('MenuApp', ['Data', 'ui,router']); //declared
    angular.module('MenuApp')
        .config(function () {
            console.log("MenuApp config fired.");
        })
        .run(function () {
            console.log("MenuApp run fired.");
        });
    console.log("MenuApp Module Init");
})();
