function tabsCtrl($scope, $http){  
// get data from v2/content
  $http.get('http://rs.hankyates.com:3000/v2/content').success( function(tabs){
    // set define tabs data within scope
    $scope.tabs = tabs;
    // set first tab as already active
    $scope.activate(tabs[0]);
  });    
  $scope.activate = function(tab) {
    //redefine active to be the tab param
    $scope.active = tab;
  }
}
