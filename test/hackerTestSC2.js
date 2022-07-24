function maxLength(a, k) {
  // Write your code here
  Array.prototype.max = function () {
    return Math.max.apply(null, this);
  };
  var resultSumNum = new Array(a.length);
  var resultSum = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    resultSumNum[i] = 0;
    resultSum[i] = 0;
    name: for (let j = 1; j < a.length; j++) {
      let sums = resultSum[i] + a[j];
      if (sums <= k) {
        resultSum[i] = sums;
        resultSumNum[i] += 1;
      } else {
        continue name;
      }
    }
  }
  return resultSumNum.max();
}
const k = 4;
const a = [3, 1, 2, 3];

console.log(maxLength(a, k));

// ถ้ามีคำยาวซ้ำ เอาคู่แรกมา
// ไม่มีตัวเลข
