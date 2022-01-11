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

	app.directive('cards', function () {
		return {
			restrict: 'E',
			templateUrl: '/pages/cards/cards.html'
		};
	});

	app.directive('goals', function () {
		return {
			restrict: 'E',
			templateUrl: '/pages/goals/goals.html'
		};
	});
})();