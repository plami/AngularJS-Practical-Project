/**
 * Created by plamena on 1/8/2015.
 */

'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {
        $scope.adsService = adsService;
        $scope.notifyService = notifyService;
        $scope.pageSize = pageSize;
        $rootScope.adsService = adsService;
        $rootScope.notifyService = notifyService;
        $rootScope.pageSize = pageSize;
    }
);
