const getOutput = (result) => {
  let output = [];
  let startPoint = null;
  result.forEach((val, index) => {
    if (!startPoint) {
      startPoint = val;
    }
    const isEnd = result[index + 1] !== val + 1;
    if (isEnd) {
      let endPoint = val;
      output = [
        ...output,
        startPoint !== endPoint ? [startPoint, endPoint] : [endPoint],
      ];
      startPoint = null;
    }
  });

  return output;
};


const findOverlapAndNotInclude = (input = []) => {
  const includedNumbers = Array.from({ length: 20 }, (_, i) => i + 1).map(
    () => 0
  );
  input.forEach((numberArr = []) => {
    const start = Math.min(...numberArr);
    const end = Math.max(...numberArr);

    for (let num = start; num <= end; num++) {
      includedNumbers[num - 1]++;
    }
  });

  const overlap = includedNumbers
    .map((item, index) => (item > 1 ? index + 1 : false))
    .filter(Boolean);

  const notInclude = includedNumbers
    .map((item, index) => (item === 0 ? index + 1 : false))
    .filter(Boolean);
  return {
    overlap: getOutput(overlap),
    notInclude: getOutput(notInclude),
  };
};

const input = [[6, 11], [5, 8], [17, 20], [7], [14, 17]];
const output = findOverlapAndNotInclude(input);

console.log("output", output);
