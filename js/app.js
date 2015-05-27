var kopsApp = angular.module('kopsApp',['ngRoute']);

kopsApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '../pages/home.html',
			controller: 'HomeCtrl'
		})
		.when('/home', {
			templateUrl: '../pages/home.html',
			controller: 'HomeCtrl'
		})
		.when('/leaders', {
			templateUrl: '../pages/leaders.html',
			controller: 'LeadersCtrl'
		});
}]);

kopsApp.controller('MainCtrl',['$scope',function($scope){
	var vm = $scope;
}]);

kopsApp.controller('LeadersCtrl',['$scope',function($scope){
	var vm = $scope;
}]);

kopsApp.controller('HomeCtrl',['$scope',function($scope){
	var vm = $scope;
}]);