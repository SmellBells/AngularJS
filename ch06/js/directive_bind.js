angular.module('myApp', []) .
	controller('myController',  function($scope) {
		$scope.colors = ['red', 'green', 'blue'];	
		$scope.myStyle = { "background-color": 'red'};
		$scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
		$scope.msg = "Dynamic Message from the model";
	});