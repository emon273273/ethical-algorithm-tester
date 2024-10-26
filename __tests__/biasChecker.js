// __tests__/biasChecker.test.js
const { calculateBias } = require("../bias/biasChecker");

test("calculates bias correctly", () => {
  const data = [
    { gender: "male", score: 70 },
    { gender: "female", score: 70 },
  ];
  const result = calculateBias(data, "gender", "score");
  expect(result.male).toBe(70);
  expect(result.female).toBe(70);
});
