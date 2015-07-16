var kopsApp = angular.module('kopsApp',['ngRoute']);

kopsApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'MainCtrl'
		})
		.when('/home', {
			templateUrl: 'pages/home.html',
			controller: 'MainCtrl'
		})
		.when('/staff', {
			templateUrl: 'pages/staff.html',
			controller: 'MainCtrl'
		})
		.when('/lands', {
			templateUrl: 'pages/lands.html',
			controller: 'MainCtrl'
		})
		.when('/faqs', {
			templateUrl: 'pages/faqs.html',
			controller: 'MainCtrl'
		})
		.when('/textures', {
			templateUrl: 'pages/textures.html',
			controller: 'MainCtrl'
		})
		.when('/recipes', {
			templateUrl: 'pages/recipes.html',
			controller: 'RecipesCtrl'
		})
		.when('/testarea', {
			templateUrl: 'pages/home_testImg.html',
			controller: 'MainCtrl'
		})
		.when('/events', {
			templateUrl: 'pages/events.html',
			controller: 'MainCtrl'
		});
}]);

kopsApp.controller('MainCtrl',['$scope',function($scope){
	var vm = $scope;
	vm.closeMenu = function(){
		angular.element('#main-menu').collapse('hide');
	}
}]);

kopsApp.controller('RecipesCtrl', ['$scope','$http', function($scope,$http){
	var vm = $scope;
	vm.searchItem = Array();
	$http.get('data/recipes.json').success(function(data){
		vm.recipeList = data;
	})

	vm.search = function(ingredient){
		console.log(vm.searchItem);
		if(ingredient.recipe == '1'){
			vm.searchItem.item = ingredient.name;
		}
	}
}])
