'use strict';

// The Register is responsible for the "Register" screen
app.controller('RegisterController',
    function ($scope, $location, authService, notifyService) {
        $scope.authService = authService;
        $scope.notifyService = notifyService;
        $location.authService = authService;
        $location.notifyService = notifyService;
    }
);
