var app = angular.module("twitterApp", ["ngRoute"]);











app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/main.html"
    })
    .when("/celebritySearch", {
        templateUrl : "partials/celebritySearch.html"
    })
    .when("/sportSearch", {
        templateUrl : "partials/sportSearch.html"
    });
    
});