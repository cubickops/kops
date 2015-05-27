var kopsApp = angular.module('kopsApp',['ngRoute']);

kopsApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'HomeCtrl'
		})
		.when('/home', {
			templateUrl: 'pages/home.html',
			controller: 'HomeCtrl'
		})
		.when('/staff', {
			templateUrl: 'pages/staff.html',
			controller: 'LeadersCtrl'
		})
		.when('/lands', {
			templateUrl: 'pages/lands.html',
			controller: 'LeadersCtrl'
		})
		.when('/faqs', {
			templateUrl: 'pages/faqs.html',
			controller: 'MainCtrl'
		})
		.when('/textures', {
			templateUrl: 'pages/textures.html',
			controller: 'MainCtrl'
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