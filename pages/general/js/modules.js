(function () {

	var app = angular.module('app', []);
	
	app.directive('headboard', function () {
		return {
			restrict: 'E',
			templateUrl: '/pages/headboard/headboard.html'
		};
	});
})();