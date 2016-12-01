/**
 * Created by Jonathan on 12/1/2016.
 */
(function() {
    "use strict";

    angular.module('public')
        .service("NewsletterService",NewsletterService);

    NewsletterService.$inject = [];
    function NewsletterService (){
        var service= this;

        service.firstName = "";
        service.lastName = "";
        service.email = "";
        service.phone = "";
        service.favShortName = "";
        service.regCompleted = false;
        //console.log(news.name);
        //NewsletterService.submit(news.firstName,news.lastName,news.email ,news.phone,news.favShortName)
        service.submit = function (firstName,lastName,email ,phone,favShortName){
            service.regCompleted = true;
            service.firstName = firstName;
            service.lastName = lastName;
            service.email = email;
            service.phone = phone;
            service.favShortName = favShortName;
            console.log("service", firstName, lastName,email,phone,favShortName,service.regCompleted);
        };
        service.getInfo = function(){
            return [service.firstName,
            service.lastName ,
            service.email ,
            service.phone ,
            service.favShortName,
            service.regCompleted];
        };
    }


})();
