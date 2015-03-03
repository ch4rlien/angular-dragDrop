/**
 * Lets define routes for each view and set it's controller.
 */
define(['./../app/main', 'homeController', 'draggableOneCtrl'], function(app) {
	'use strict';
	return app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
            .state('home',{
			    url: "/home",
			    templateUrl: "templates/home.html",
			    controller: 'HomeCtrl'
		    })
            .state('draggableOne', {
                url: "/dragBetween",
                templateUrl: "templates/draggableOne.html",
                controller: 'DraggableOneCtrl'
            })
	})
});