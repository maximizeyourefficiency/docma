angular.module('MainCtrl', []).controller('MainController', function($scope, $rootScope, ngDialog) {
    $scope.openPlain = function () {
	$rootScope.theme = 'ngdialog-theme-plain';
        ngDialog.open({
		//template: 'firstDialogId',
        template: 'views/searchdialog.html',
		controller: 'SearchController',
		className: 'ngdialog-theme-plain',
		closeByDocument: false
		});
    };

});

