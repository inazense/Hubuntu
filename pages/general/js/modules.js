(function () {

	var app = angular.module('app', []);
	
	app.directive('headboard', function () {
		return {
			restrict: 'E',
			templateUrl: 'pages/headboard/headboard.html'
		};
	});

	app.directive('carousel', function () {
		return {
			restrict: 'E',
			templateUrl: 'pages/carousel/carousel.html'
		};
	});

	app.directive('cards', function () {
		return {
			restrict: 'E',
			templateUrl: 'pages/cards/cards.html'
		};
	});

	app.directive('goals', function () {
		return {
			restrict: 'E',
			templateUrl: 'pages/goals/goals.html'
		};
	});

	app.directive('events', function () {
		return {
			restrict: 'E',
			templateUrl: 'https://inazense.github.io/Hubuntu/pages/events/events.html'
		};
	});
	
	app.directive('contact', function () {
		return {
			restrict: 'E',
			templateUrl: 'https://inazense.github.io/Hubuntu/pages/contact/contact.html'
		};
	});

	app.directive('bottom', function () {
		return {
			restrict: 'E',
			templateUrl: 'https://inazense.github.io/Hubuntu/pages/bottom/bottom.html'
		};
	});
})();