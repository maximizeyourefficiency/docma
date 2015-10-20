(function(){

	'use strict';

	angular
		.module('StraDocMaApp')
		.factory('kostenstelle', kostenstelle);

	function kostenstelle() {

		function getKostenstellen() {
			return [
				{
					"name": "Rahmenvertrag LSW Wolfsburg",
					"value":"lsw_wob"
				},
				{
					"name":"Fernwaerme LP7 Autostadt",
					"value":"lp7as"
				},
			];
		}
		return {
			getKostenstellen: getKostenstellen
		}
	}
})();