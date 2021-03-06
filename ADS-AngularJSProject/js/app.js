'use strict';

//dependency - in the module app we are using the other modules from the external libraries
var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 2);

// parameters to which we want to access (from outside), using routes for re-directing to the different pages
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/personal-ads.html',
        controller: 'UserAdsController'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/edit-profile.html',
        controller: 'EditProfileController'
    });

    $routeProvider.when('/user/password', {
        templateUrl: 'templates/user/change-password.html',
        controller: 'ChangePasswordController'
    });

    $routeProvider.when('/user/ads/edit/:id', {
        templateUrl: 'templates/user/edit-ads.html',
        controller: 'EditAdsController'
    });

    $routeProvider.when('/user/ads/deactivate/:id', {
        templateUrl: 'templates/user/personal-ads.html',
        controller: 'UserAdsController'
    });

    $routeProvider.when('/user/ads/publishAgain/:id', {
        templateUrl: 'templates/user/personal-ads.html',
        controller: 'UserAdsController'
    });

    $routeProvider.when('/user/ads/delete/:id', {
        templateUrl: 'templates/user/confirm-delete.html',
        controller: 'DeleteAdController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});


// Global authorization check to avoid anonymous site visitors to access user screens
app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf('/user/') != -1 && !authService.isLoggedIn()) {
            $location.path('/');
        }
    });
});