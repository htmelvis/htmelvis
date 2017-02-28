'use strict';
app.controller('MainCtrl',['$scope','$http', '$location' ,function ($scope, $http, $location) {

  var newdate = new Date;
  $scope.date = newdate.getFullYear();
  $scope.formData = {};
  $scope.navigationState = {};

  $scope.submitForm = function(){
  	if($scope.contactForm.$valid){
  		$http({
  			method: 'POST',
  			url: '/process/process.php',
  			data: $.param($scope.formData),
  			headers: { 'Content-Type' : 'application/x-www-form-urlencoded'}
  		}).success(function(data){
  			console.log(data);
  			if(!data.success){
  				$scope.errorName = data.errors.name;
  				$scope.errorEmail = data.errors.email;
  			} else {
  				$scope.message = data.message;
  			}
  		});
  	}
  };

  $scope.gotolink = function(link){
  	 $location = link;
  	 return true;
  };

  $scope.updateNavigationState = function($currentState){
     var state = $currentState || false;
     // currently scrolling?
     // if stopped and not at the top
     // scrolling down so hide the nav
     // background color state (black/white)
     //
  };

  // provide a method that checks validity and sends back a differnt var to the frton end.
  //Use tag manager for types of link clicks to track what is going on .

  $scope.validateInput = function(input){
    console.log(input)
  }
}]);
app.controller('BlogCtrl',['$scope','$location' ,function ($scope, $location) {

  var newdate = new Date;
  $scope.date = newdate.getFullYear();
  $scope.formData = {};
  $scope.navigationState = {};


  $scope.gotolink = function(link){
    $location = link;
    return true;
  };

  $scope.updateNavigationState = function($currentState){
    var state = $currentState || false;
    // currently scrolling?
    // if stopped and not at the top
    // scrolling down so hide the nav
    // background color state (black/white)
    //
  };

}]);
