/**
 * Config file for setting up basic routes to javascript files and define their dependencies. This config is made using
 * RequireJs.
 */
requirejs.config({
	paths: {
		// External libraries for running locally (non-minified versions)
		'domReady': 'lib/requirejs-plugins/domReady',
		'text': 'lib/requirejs-plugins/text',
		'angular': 'lib/angular/angular',
		'angular-cookies': 'lib/angular/angular-cookies',
		'angular-ui.router': 'lib/angular-ui-router/angular-ui-router',
		'uiBootstrap': 'lib/ui-bootstrap/ui-bootstrap-tpls-0.12.1',
        'angular-dragdrop': 'lib/dragDrop/angular-dragdrop',
        'jquery': 'lib/jQuery/jquery-2.1.3',
        'jquery-ui': 'lib/jQuery/jquery-ui',

        //controllers
	    'homeController': 'app/controller/home',
        'draggableOneCtrl': 'app/controller/draggableOne'
	},

	baseUrl: 'resources/js',

	shim: {
        'jquery': {'exports': 'jQuery'},
        'jquery-ui': {'deps': ['jquery']},
		'angular': {'exports': 'angular', 'deps': ['jquery', 'jquery-ui']},
		'angular-cookies': {deps: ['angular']},
		'angular-ui.router': {deps: ['angular']},
		'uiBootstrap': {deps: ['angular']},
        'angular-dragdrop': {deps: ['angular']},
		underscore: {
			exports: '_'
		}
	},
	deps: [
		// kick start application
		'config/bootstrap'
	]
});