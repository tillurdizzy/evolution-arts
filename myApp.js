'use strict';
var app = angular.module('MyApp', ['ui.router','ngAnimate','ngSanitize','slick','smart-table']);

app.config(function($stateProvider, $urlRouterProvider) {
 	
 	$urlRouterProvider.otherwise("/home");
  	
	$stateProvider
		
		.state('home', {
			url: "/home"
		})
		.state('store', {
			url: "/store",
			templateUrl:"views/store/store-menu-mobile.html"
		})
		.state('services', {
			url: "/services",
			templateUrl:"views/services/service-menu-mobile.html"
		})

		.state('tables', {
			url: "/woodtables",
			templateUrl:"views/store/tables/tables.html"
		})
		.state('mugs', {
			url: "/travelmugs",
			templateUrl:"views/store/mugs.html"
		})
		.state('sticks', {
			url: "/whoopingsticks",
			templateUrl:"views/store/sticks.html"
		})
		.state('boards', {
			url: "/cuttingboards",
			templateUrl:"views/store/boards.html"
		})
		.state('pins', {
			url: "/rolling-pins",
			templateUrl:"views/store/rollingpins.html"
		})
		.state('laser', {
			url: "/laser",
			templateUrl:"views/services/laser.html"
		})
		
		.state('thermofoil', {
			url: "/thermofoil",
			templateUrl:"views/services/thermofoil.html"
		})
		.state('print', {
			url: "/print",
			templateUrl:"views/services/print.html"
		})
		.state('wood', {
			url: "/wood",
			templateUrl:"views/services/wood.html"
		})
		
		.state('contact', {
			url: "/contact",
			templateUrl:"views/contact/contact.html"
		})

		
		
});	

app.run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
        $(document).foundation();
    });
});


