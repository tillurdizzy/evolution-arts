'use strict';

app.controller('ContactCtrl',['$scope','$state','sqlDb',function ($scope,$state,sqlDb) {
	var DB = sqlDb;
	$scope._firstname="";
    $scope._lastname="";
    $scope._email="";
    $scope._phone="";
    $scope._state="";
    $scope._zip="";
    $scope._file="";
    $scope._comment="";
    $scope.requestSuccess=false;// set true after submit success
    $scope.submissionInvalid = false;
	
    $scope.submitRequestForm = function(){
        $scope.requestSuccess=false;
        if(this.requestForm.$valid){
            $scope.submissionInvalid = false;
            var dataObj = new Object();
            dataObj.first = $scope._firstname;
            dataObj.last = $scope._lastname;
            dataObj.email = $scope._email;
            dataObj.phone = $scope._phone;
            dataObj.state = $scope._state;
            dataObj.zip = $scope._zip;
            dataObj.file = $scope._file;
            dataObj.comment = $scope._comment;
            DB.insertRequest(dataObj).then
            (function(result){
                if(result.result==true){
                    $scope.requestSuccess=true;
                    $scope.clearForm();
                    //$scope.openDialog('thankyou');
                    // Now send an email
                     alert("Thank You!");
                     DB.sendEmail(dataObj);
                }else{
                    alert("Error submitRequestForm -> ContactCtrl");
                };
                    
            },function(error){
                $scope.dataError();
            });
        }else{
            $scope.submissionInvalid = true;// triggers form errors to show 
        };
    };

    $scope.dataError = function(){

    };

    $scope.clearForm = function(){
        $scope._firstname="";
        $scope._lastname="";
        $scope._email="";
        $scope._phone="";
        $scope._state="";
        $scope._zip="";
        $scope._file="";
        $scope._comment="";
    };

	
 }]);