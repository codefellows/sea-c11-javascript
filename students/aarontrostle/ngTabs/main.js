function TabsController($scope, $http) {

  $scope.tabs = [];

  $http({method: 'GET', url: 'http://rs.hankyates.com:3000/v2/content'})
    .success(saveTabs);

  $scope.showTab = function(tab) {
    $scope.activeTab = tab;
  };

  function saveTabs(tabs) {
    $scope.tabs = tabs;
    $scope.activeTab = $scope.tabs[0];
  };
};
