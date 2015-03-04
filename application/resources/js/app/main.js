/**
 * Basic config for whole application. We could change the config files and include them in this one, but this file
 * might get too big.
 */
define([
    'angular',
    'angular-ui.router',
    'uiBootstrap',
    'ngSortable',
    'angular-cookies',
    'fontAwesome'
], function (angular) {
	'use strict';
	return angular.module('app', [
		'ui.router',
		'ui.bootstrap',
		'ngCookies',
        'ui.sortable',
        'picardy.fontawesome'
	]);
});