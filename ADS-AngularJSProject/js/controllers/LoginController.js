/**
 * Created by plamena on 1/8/2015.
 */

'use strict';

// The LoginController is responsible for the "Login" screen
app.controller('LoginController',
    function ($scope, $location, authService, notifyService) {
        $scope.authService = authService;
        $scope.notifyService = notifyService;
        $location.authService = authService;
        $location.notifyService = notifyService;
    }
);
