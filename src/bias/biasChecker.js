// src/bias/biasChecker.js
function calculateBias(data, attribute, score) {
    const results = {};
    data.forEach(entry => {
        const key = entry[attribute];
        if (!results[key]) {
            results[key] = [];
        }
        results[key].push(entry[score]);
    });
    return results;
}

module.exports = { calculateBias };
