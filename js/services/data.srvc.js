'use strict';

app.service('sqlDb',['$http','$q',function dataQueries($http,$q){
	var self = this;
	self.ME = "sqlDb: ";

	self.sendEmail = function(dataObj){
		$http({method: 'POST', url: 'js/php/sendEmail.php',data:dataObj});
	};

	self.insertRequest = function(dataObj){
		var deferred = $q.defer();
		$http({method: 'POST', url: 'js/php/contactRequest.php',data:dataObj}).
		success(function(data, status, headers, config) {
     		deferred.resolve(data);
	    }).
	    error(function(data, status, headers, config) {
			deferred.reject(data);
	    });
	    return deferred.promise; //return the data
	};
	
	return self;
}]);