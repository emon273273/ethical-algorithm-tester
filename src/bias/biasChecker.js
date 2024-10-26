// src/bias/biasChecker.js
const _ = require('lodash');
const ss = require('simple-statistics');
console.log(ss)

/**
 * Calculates bias by averaging targetAttr values grouped by protectedAttr.
 * Returns an object showing mean targetAttr values for each group.
 */
function calculateBias(data, protectedAttr, targetAttr) {
    const groupByAttr = _.groupBy(data, protectedAttr);
    const results = {};

    Object.keys(groupByAttr).forEach(attrValue => {
        const subgroup = groupByAttr[attrValue];
        const values = subgroup.map(item => item[targetAttr]);
        results[attrValue] = ss.mean(values); // Calculate the mean for each group
    });

    return results;
}

module.exports = { calculateBias };
