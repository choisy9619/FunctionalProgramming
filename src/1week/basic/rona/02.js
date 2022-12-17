function accumulate(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0);
}

exports.accumulate = accumulate;
