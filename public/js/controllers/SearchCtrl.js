angular.module('SearchCtrl', []).controller('SearchController', function (kostenstelle) {
'use strict';
    var vm = this;

    // The model object that we reference
    // on the  element in index.html
    vm.search = {};
    
    // An array of our form fields with configuration
    // and options set. We make reference to this in
    // the 'fields' attribute on the  element
    vm.searchFields = [
        {
            key: 'fco',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'FCO',
                placeholder: 'FCO eingeben',
                required: true
            }
        },
        {
            key: 'kst',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'KST',
                placeholder: 'Kostenstelle eingeben',
                required: true
            }
        },
    ];
});
