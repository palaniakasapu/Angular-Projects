app.config(function ($stateProvider) {
	$stateProvider
	.state('start', {
		url: '',
		views: {
			viewH: {templateUrl: 'html/header.html', controller: 'headerCtrl'},
			viewB: {templateUrl: 'html/home.html', controller: 'firstCtrl'}
		}
	})
	.state('about', {
		url: '/about',
		views: {
			viewH: {templateUrl: 'html/header.html', controller: 'headerCtrl'},
			viewB: {templateUrl: 'html/about.html', controller: 'firstCtrl'}
		}
	})
	.state('createNew', {
		url: '/create',
		views: {
			viewH: {templateUrl: 'html/header.html', controller:'headerCtrl'},
			viewB: {templateUrl: 'html/create.html', controller:'createCtrl'}
		}
	})
});