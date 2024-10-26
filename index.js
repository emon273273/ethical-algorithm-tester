// index.js
const { calculateBias } = require('./bias/biasChecker');
const { demographicParity } = require('./fairness/fairnessChecker');
const { explainPrediction } = require('./transparency/explainability');
const { accountabilityScore } = require('./accountability/accountabilityScorer');

module.exports = {
    calculateBias,
    demographicParity,
    explainPrediction,
    accountabilityScore,
};
