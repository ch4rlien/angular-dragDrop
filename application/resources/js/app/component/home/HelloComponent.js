define([
	'app/main',
	'text!app/component/home/HelloTemplate.html',
], function (app, template) {
	app
		.controller('HelloController', function($scope){
			$scope.controllerMessage = "Behold!";
            $scope.itemClick - function(){
                console.log('asasf');
                console.log(arguments);
            };
		})
		.directive('myHello', function(){
			return {
				template: template,
				restrict: "E",
				scope: {
					message: "=",
					action: '&'
				},
				link: function($scope, element, attrs) {
					console.log($scope);
				}
			};
		})
});