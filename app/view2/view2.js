'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope,serviceId) {

	//$scope.left = {};
	$scope.content = "";
	$scope.clickedItem = function(clickedItem){
		var data ={
			top:"Bob",
			left: clickedItem
		};
		serviceId.getContent(data).then(function(responseData){
			$scope.content = responseData;
		});
	};

});