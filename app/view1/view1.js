'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope,serviceId) {

	//$scope.left = {};
	$scope.content = "";
	$scope.clickedItem = function(clickedItem){
		var data ={
			top:"Eva",
			left: clickedItem
		};
		serviceId.getContent(data).then(function(responseData){
			$scope.content = responseData;
		});
	};


});