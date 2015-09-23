'use strict';
app.controller('MainCtrl',['$scope', '$http', '$location', '$document' ,function ($scope, $http, $location, $document) {
	function sizeNavToScreen(){
		if(window.innerWidth <= 768){
			angular.element('#nav-container').css({
				'width': window.innerWidth
			});
		}
	}
	sizeNavToScreen();
  var newdate = new Date;
  $scope.date = newdate.getFullYear();
  $scope.formData = {};

  //Scroll Events
	$document.on('scroll', function() {
		if($document.scrollTop() >= 60){
			angular.element('#nav-container').addClass('shrink');
		} else {
			angular.element('#nav-container').removeClass('shrink');
		}
	});

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

}]);