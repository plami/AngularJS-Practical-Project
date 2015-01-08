/**
 * Created by plamena on 1/8/2015.
 */

'use strict';

// The RightSidebarController controls the content displayed in the right sidebar
app.controller('RightSidebarController',
    function ($scope, categoriesService, townsService) {
        $scope.categoriesService = categoriesService;
        $scope.townsService = townsService;
    }
);

