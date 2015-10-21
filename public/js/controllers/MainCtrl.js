angular.module('MainCtrl', []).controller('MainController', function($scope, ngDialog) {
    $scope.open = function () {
        ngDialog.open({
		//template: 'firstDialogId',
        template: 'views/searchdialog.html',
		controller: 'SearchController',
        className: 'ngdialog-theme-plain',
        scope : $scope,
		closeByDocument: false
		});
    };
});