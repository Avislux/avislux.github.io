(function(){
    angular.module('Data')
        .service("MenuDataService",MenuDataService)
        .constant("ApiPath", "https://davids-restaurant.herokuapp.com/categories.json");
    MenuDataService.$inject= ["ApiPath"];
    function MenuDataService(){
        var service = this;
        service.getAllCategories = function(){
            console.log("Service called");
            return $http({
                    method:"GET",
                    url:(ApiPath)
                }

            ).then(function (result) {
                console.log("result.data:  ",result.data);
                return result.data;

            });
        };
        //- this method should return a promise which is a result of using the $http service, using the following REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json
        service.getItemsForCategory = function(categoryShortName){
            return $http({
                    method:"GET",
                    url:('https://davids-restaurant.herokuapp.com/menu_items.json?category='),
                    params:{}
                }

            ).then(function (result) {
                console.log("result.data:  ",result.data);
                return result.data;

            });
        }; //- this method should return a promise which is a result of using the $http service, using the following REST API endpoint:
           // https://davids-restaurant.herokuapp.com/menu_items.json?category=, where, before the call to the server, your code should append whatever categoryShortName value wa
                // s passed in as an argument into the getItemsForCategory method.

    }
})();
