/**
 * Created by plamena on 1/8/2015.
 */
'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsite.net');
app.constant('pageSize', 2);

app.config(function ($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login',{
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        });

    $routeProvider.when('/register',{
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/'}
    )
});