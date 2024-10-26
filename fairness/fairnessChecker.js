// src/fairness/fairnessChecker.js
const _ = require('lodash');
const ss = require('simple-statistics');

/**
 * Checks demographic parity by calculating the mean of targetAttr for each protectedAttr group.
 */
function demographicParity(data, protectedAttr, targetAttr) {
    const outcomes = _.groupBy(data, protectedAttr);
    const meanOutcomes = {};

    Object.keys(outcomes).forEach(attr => {
        const values = outcomes[attr].map(item => item[targetAttr]);
        meanOutcomes[attr] = ss.mean(values);
    });

    return meanOutcomes;
}

module.exports = { demographicParity };
