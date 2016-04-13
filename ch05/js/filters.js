angular.module('myApp', [])
	.controller('myController',  function($scope) {
		$scope.currentDate = new Date();
		$scope.JSONObj =  title: {"MyTitle"} ;
		$scope.word="supercalifragilistexpialidocious";
		$scope.days=['Monday', 'Tuesday', 'Wednesday', 'Thursaday', 'Friday'];
	});