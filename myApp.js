'use strict';
var app = angular.module('MyApp', ['ui.router','ngAnimate','ngSanitize','slick']);

app.config(function($stateProvider, $urlRouterProvider) {
 	
 	$urlRouterProvider.otherwise("/home");
  	
	$stateProvider
		
		.state('home', {
			url: "/home",
			templateUrl:"views/home/home.html"
		})
		.state('about', {
			url: "/about",
			templateUrl:"views/home/about.html"
		})

		

		.state('tables', {
			url: "/tables",
			templateUrl:"views/tables/tables.html"
		})
		.state('other', {
			url: "/misc",
			templateUrl:"views/other/other.html"
		})

		
		
});	

app.run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
        $(document).foundation();
    });
});


