(function() {
    "use strict";

    angular.module('public')
        .controller("NewsletterController",NewsletterController);

    NewsletterController.$inject = ['NewsletterService'];
    function NewsletterController (NewsletterService){
        var news = this;
        //console.log(reginfo);
        news.firstName =  NewsletterService.firstName;
        news.lastName = NewsletterService.lastName;
        news.email = NewsletterService.email;
        news.phone = NewsletterService.phone;
        news.favShortName = NewsletterService.favShortName;
        news.regCompleted = NewsletterService.regCompleted;
        //console.log(news.name);
        news.submit = function (){
            news.regCompleted = true;
            console.log("controller", news.firstName, news.lastName,news.email,news.phone,news.favShortName,news.regCompleted);
            NewsletterService.submit(news.firstName,news.lastName,news.email ,news.phone,news.favShortName);

        };
    }


})();
