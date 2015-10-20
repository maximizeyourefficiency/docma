(function(){

	'use strict';

	angular
		.module('DocMaApp')
		.factory('kostenstelle', kostenstelle);

	function kostenstelle() {

		function getKostenstellen() {
			return [
				{
					"name": "name1",
					"value":"namevalue1"
				},
				{
					"name":"name2",
					"value":"namevalue2"
				},
			];
		}
		return {
			getKostenstellen: getKostenstellen
		}
	}
})();