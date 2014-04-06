/*
 * Assemble Plugin: Partial Data
 *
 * Collects data from partials and groups it by key.
 * Each value in the data hash has a list of associated partials.
 *
 * Copyright (c) 2014 Alex Bogdanovski
 * Licensed under the MIT license.
 */
"use strict";

var _ = require("lodash");

module.exports.options = {
	stage: "render:pre:pages"
};

module.exports = function(params, next) {

	var assemble = params.assemble;
	var grunt = params.grunt;
	var options = assemble.options;
	var partialData = {};

	if (!assemble.options.partialData) {
		_.each(options.data, function(item, key) {
			_.each(item, function(i, k) {
				if (k in partialData && _.isArray(partialData[k])) {
					var val = _.find(partialData[k], {value: i});
					if (val) {
						val.partials = _.union(val.partials, [key]);
					} else {
						partialData[k].push({value: i, partials: [key]});
					}
				} else {
					partialData[k] = [{value: i, partials: [key]}];
				}
			});
		});

		params.context.partialData = partialData;
		grunt.verbose.writeln(JSON.stringify(partialData, undefined, 2).grey);
	}

	next();
};
