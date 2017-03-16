app.controller('firstCtrl', function ($scope, $location) {
	// $scope.name = 'Palani';
	$scope.products = [{id: 1, name: 'Lux'}
		,{id: 2, name: 'Santoor'}
		,{id: 3, name: 'Rexona'}
		,{id: 4, name: 'Dove'}
		,{id: 5, name: 'Lifeboy'}
		,{id: 6, name: 'Cinthol'}
	];

	$scope.getView = function (name) {
		console.log('argument: ', name[0]);
		$location.path('about');
	};
});

app.controller('headerCtrl', function ($scope) {
	// $scope.name = 'Palani';
	$scope.name = 'startPage';
});
