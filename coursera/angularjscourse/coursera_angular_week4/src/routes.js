(function(){
    'use strict';
    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: 'templates/home.template.html'
                }

            )
            .state('categories',{
                    url:'/categories',
                    templateUrl: 'templates/main.categories.template.html',
                    controller: 'MainController as main',
                    resolve: {
                        categories: ['MenuDataService', function (MenuDataService) {
                            console.log("Categories resolve called");
                            return MenuDataService.getAllCategories();
                        }]
                    }
                }

            )
            .state('items',{
                    url:'/items/:categoryShortName',
                    templateUrl: 'templates/main.items.template.html',
                    controller: 'ItemController as itemCtrl',
                    resolve: {
                        items: [ /*'$stateParams',*/'MenuDataService',
                            function (MenuDataService/*, $stateParams*/) {
                               // console.log("items resolved called stateparmas", $stateParams);
                               // console.log("items resolved called", $stateParams.categoryShortName);
                                return MenuDataService.getItemsForCategory('L');
                        }]
                    }
                }

            );
    }
})();
