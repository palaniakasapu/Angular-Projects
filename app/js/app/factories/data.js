app.factory('dataFactory', function ($http) {
	var getData = function () {
		var products = [{id: 1, name: 'Lux'}
			,{id: 2, name: 'Santoor'}
			,{id: 3, name: 'Rexona'}
			,{id: 4, name: 'Dove'}
			,{id: 5, name: 'Lifeboy'}
			,{id: 6, name: 'Cinthol'}
			,{id: 7, name: 'Old Cinthol'}
		];
		console.log('factory');
		return products;
	};

	// var getAPIData = function () {
	// 	$http.get({
	// 		url: 'api url',
	// 		headers: {

	// 		},
	// 		data: {

	// 		}
	// 	}).success(function (data) {
	// 		return data;
	// 	}).error(function (error) {
	// 		return errod.code;
	// 	})
	// };

	return {
		getProducts: getData
	};
});