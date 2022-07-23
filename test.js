function solution(A) {
  const Array = [...new Set(A)];
  const newArray = Array.sort();
  let position;
  for (let k = 0; k < 100000; k++) {
    if (newArray[k] > 0) {
      position = k;
      break;
    }
  }
  const lastArray = newArray.slice(position);

  var result;
  let i = 0;

  for (let j = 1; j <= 1000000; j++) {
    if (j !== lastArray[i]) {
      result = j;
      break;
    } else {
      i += 1;
    }
  }

  return result;
}

const A = [1, 1, 3, 5, 8, 4, 2, -5, 6, 7, -7];
// const Array = A.filter((a) => a > 0).sort();
// console.log([...new Set(Array)]);

console.log(solution(A));

// A.sort(function(a, b) {return a - b})
