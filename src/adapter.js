define(['node_modules/dojo-core/global', 'intern!bdd', 'intern!tdd', 'intern!object'], function (global, bdd, tdd, object) {
	global.default.__intern__ = {
		bdd: bdd,
		tdd: tdd,
		object: object
	};
	return {
		load: function (resourceId, require, load) {
			require([resourceId], load);
		}
	};
});
