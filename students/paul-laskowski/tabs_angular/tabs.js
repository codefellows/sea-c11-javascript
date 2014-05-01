
function tabController($scope, $http) {
	
	$scope.tabs = [];
	$http.get('http://rs.hankyates.com:3000/v2/content').success(gotData);
	
	$scope.showTab = function(tab){
		$scope.activeTab = tab;
	};
	
  function gotData(tabs){
	  $scope.tabs = tabs;
	  $scope.activeTab = $scope.tabs[0];
  }

};

// angular.module('ngFilters', []).filter('capitalize', function () {
//     "use strict";
//     return function (input) {
//         return input.charAt(0).toUpperCase() + input.slice(1);
//     };
// });