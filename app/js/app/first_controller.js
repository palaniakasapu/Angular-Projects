app.controller('firstCtrl', function ($scope, $location) {
	// $scope.name = 'Palani';
	$scope.products = [{id: 1, name: 'Lux'}
		,{id: 2, name: 'Santoor'}
		,{id: 3, name: 'Rexona'}
		,{id: 4, name: 'Dove'}
	];
	$scope.categories = [{id: 1, name: 'Lux'}
		,{id: 2, name: 'Santoor'}
		,{id: 3, name: 'Rexona'}
		,{id: 4, name: 'Dove'}
		,{id: 5, name: 'Lifeboy'}
		,{id: 6, name: 'Cinthol'}
	];

	$scope.getView = function (name) {
		console.log('argument: ', name[3]);
		$location.path('about');
	};

	$scope.editProduct = function (id) {
		console.log(id);
	}
});

app.controller('headerCtrl', function ($scope) {
	// $scope.name = 'Palani';
	$scope.name = 'startPage';
});
