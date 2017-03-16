app.controller('createCtrl', function ($scope, $location) {
	$scope.formName = 'Create New Record';
	$scope.printForm = function (userData) {
		console.log(userData);
	};
	$scope.countries = [
		{id: 1, name: 'India'},
		{id: 1, name: 'USA'},
		{id: 1, name: 'UK'},
		{id: 1, name: 'Aus'},
		{id: 1, name: 'China'},
	];
});