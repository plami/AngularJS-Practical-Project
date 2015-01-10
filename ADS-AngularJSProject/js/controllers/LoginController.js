/**
 * Created by plamena on 1/8/2015.
 */

'use strict';

// The LoginController is responsible for the "Login" screen
app.controller('LoginController',
    function ($scope, $rootScope, $location, authService, notifyService) {
        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    notifyService.showInfo("Login successful");
                    $location.path("/");
                },
                function error(err) {
                    // TODO: display the error message returned by the server
                }
            );
        };
    }
);

