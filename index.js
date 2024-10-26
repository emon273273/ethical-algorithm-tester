// index.js
const { calculateBias } = require('./src/bias/biasChecker');
const { demographicParity } = require('./src/fairness/fairnessChecker');
const { explainPrediction } = require('./src/transparency/explainability');
const { accountabilityScore } = require('./src/accountability/accountability');

module.exports = {
    calculateBias,
    demographicParity,
    explainPrediction,
    accountabilityScore,
};
