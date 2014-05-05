var app = angular.module('tabsTable', []);

app.controller('TabsCtrl', function($scope, $http) {
    $scope.tabButtons = [];

    $http.get("http://rs.hankyates.com:3000/v2/content").
        success(function(tabs){
            $scope.tabButtons = tabs
    })

    $scope.setActiveTab = function(tab){
       $scope.activeTab = tab;
    };

});

