// src/transparency/explainability.js
function explainPrediction(model, input) {
    return model.explain(input);
}

module.exports = { explainPrediction };
