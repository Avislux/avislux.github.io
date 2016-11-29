/**
 * Created by Jonathan on 11/27/2016.
 */
(function() {
    "use strict";

    angular.module('public')
        .controller("NewsletterController",NewsletterController);

    NewsletterController.$inject = [];
    function NewsletterController (){
        var news = this;
        news.showInfo = function (){};
        news.signUp = function(){};
    }


})();
