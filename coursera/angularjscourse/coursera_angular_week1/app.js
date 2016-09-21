/**
 * Created by Jonathan on 9/13/2016.
 */
//Create `app.js` in your project and declare the an Angular module to match your `ng-app` declaration.
(function(){
'use strict';
angular.module('LunchCheck', [])

.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
    $scope.items = "";
    $scope.message = '';
    $scope.check = function () {
       var itemsText = $scope.items;
       $scope.numItems = itemsText.split(",").length;
       if (itemsText.trim() == '' || $scope.numItems == 0) {$scope.message = "Please enter data first.";}
       else if ($scope.numItems > 3){$scope.message = "Too much!";}
       else {$scope.message ="Enjoy!";}

    };

};

})();
/*If the number of items in the textbox is less than or equal to 3 (e.g., 1, 2, or 3),
a message should show up next to the textbox saying "Enjoy!". If the number of items is greater than 3 (4, 5, and above), the message "Enjoy!" should *change* to the message "Too much!"

If the textbox is empty and the user clicks the "Check If Too Much" button, the message "Please enter data first" should show up.
'Empty' here means either `""` (empty string) or a string with just spaces in it. (Hint: you will need to use `String.prototype.trim()`
method to get rid of possible spaces in the textbox. [See documentation for that method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim).)


 10. Go back to `app.js`. Declare and define a `LunchCheckController`. Properly inject `$scope` into the controller using the `$inject` property (shown how in video lecture)
 to make sure to protect your code from minification.
*/