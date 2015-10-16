'use strict';

app.controller('HomeCtrl',['$location','$state','evoDb','$scope','SharedSrvc',function ($location,$state,evoDb,$scope,SharedSrvc) {
	var DB =  evoDb;
	var ME = this;
	var S = SharedSrvc;
	
	ME.getEvents = function(){
		var result = DB.getEvents()
        .then(function(result){
            if(result != false){
            	
            }else{
              ME.dataError("HomeCtrl-getEvents()-1",result); 
            }
        },function(error){
            ME.dataError("HomeCtrl-getEvents()-2",result);
        });
	}

	ME.dataError = function(loc,error){
		console.log(loc + " : " + error);
	}

	$scope.$on('$viewContentLoaded', function() {
 		ME.getEvents();
    });

 }]);