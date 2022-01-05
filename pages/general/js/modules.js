(function () {

	var app = angular.module('app', []);
	
	app.directive('headboard', function () {
		return {
			restrict: 'E',
			templateUrl: '/pages/headboard/headboard.html'
		};
	});

	app.directive('carousel', function () {
		return {
			restrict: 'E',
			templateUrl: '/pages/carousel/carousel.html'
		};
	});
})();