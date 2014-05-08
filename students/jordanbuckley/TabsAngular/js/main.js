var TabsAngularJJB = angular.module('TabsAngularJJB', []);

function TabsCtrl($scope, $http) {
  
  $scope.tabs = [];

  // Get tabs
  $http({method: 'GET', url: 'http://rs.hankyates.com:3000/v2/content'})
    .success(populateTabs);

  // Show tab
  $scope.showTab = function(tab){
    $scope.activeTab = tab;
  };

  function populateTabs(tabs){
    // Fill tabs array
    $scope.tabs = tabs;
    // Set first tab active
    $scope.activeTab = $scope.tabs[0];
  }
}
