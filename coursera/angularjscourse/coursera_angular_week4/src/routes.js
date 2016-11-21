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
                    //controller: 'MainController as main', //TODO: Make controller?
                    resolve: {
                        items: ['MenuDataService', function (MenuDataService) {
                            return MenuDataService.getAllCategories();
                        }]
                    }
                }

            )
            .state('items',{
                    url:'/',
                    templateUrl: ''
                }

            );
    }
})();
