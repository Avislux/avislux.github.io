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
                            var resolve = this;
                            var promise = MenuDataService.getAllCategories();
                            promise.then(function(categories){
                                console.log("resolve promise then cat", categories);
                                resolve.cat = categories;
                                console.log("resolve.cat", resolve.cat);
                                }
                            );
                            console.log("resolve.cat end", resolve.cat);
                            return resolve.cat;
                        }]
                    }
                }

            )
            .state('items',{
                    url:'/items',
                    templateUrl: 'templates/items.templates.html'
                }

            );
    }
})();
