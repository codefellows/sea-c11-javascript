function NgTabsCtrl($scope, $http) {
  
  $scope.tabs = [];

  // Let's get us some tabs
  $http({method: 'GET', url: 'http://rs.hankyates.com:3000/v2/content'})
    .success(onTabsFetched);

  $scope.showTab = function(tab){
    $scope.activeTab = tab;
  };

  function onTabsFetched(tabs){
    // Populate Tabs Array
    $scope.tabs = tabs;
    // Set first tab as active
    $scope.activeTab = $scope.tabs[0];
  }

};