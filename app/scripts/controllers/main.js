'use strict';
app.controller('MainCtrl',['$scope','parallaxHelper', '$http', '$location' ,function ($scope, parallaxHelper, $http, $location) {
  $scope.background = parallaxHelper.createAnimator(0.6, -10, -860);
  window.scrollReveal = new scrollReveal({reset: true, init: true}); 
  TweenMax.to('.opening', 1.75, {opacity: 1} );
  var tl = new TimelineMax({repeat: 100});
  tl.to('.btn-callout', .75, {autoAlpha: 0.8}, 0.2);

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
}]);