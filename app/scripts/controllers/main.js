'use strict';
app.controller('MainCtrl',['$scope','parallaxHelper', '$http', '$location' ,function ($scope, parallaxHelper, $http, $location) {
  $scope.background = parallaxHelper.createAnimator(0.6, -10, -860);
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

	var opts = {
		containerId: 'sub',
		namespace: 'sub',
		interval: 5500,
		speed: 100,
		verbose: false,
		random: false,
		best: true
	};
	var opts2 ={
		containerId: 'sub2',
		namespace: 'sub2',
		interval: 6000,
		speed: 100,
		verbose: false,
		random: false,
		best: true
	}
	var sub = new Sub([
		"I'm Ed, An Entrepreneur.",
		"I'm Ed, A Father. ",
		"I'm Ed, A Web Worker. ",
		"I'm Ed, A Husband. "
	], opts).run();

	var sub2 = new Sub([
		"I love to build websites.",
		"I love to build web apps.",
		"I love to fix websites.",
		"I love to design websites."
	], opts2).run();

}]);