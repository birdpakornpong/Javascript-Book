function ranks(ranks) {
  let result = 0;
  const manyRank = ranks.reduce(function (obj, rank) {
    return {
      ...obj,
      [rank]: (obj[rank] || 0) + 1,
    };
  }, {});
  const ArrayRank = Object.entries(manyRank);
  for (let i = 0; i < ArrayRank.length; i++) {
    let rank = Number(ArrayRank[i][0]);
    let many = Number(ArrayRank[i][1]);
    if (i < ArrayRank.length - 1 && rank == ArrayRank[i + 1][0] - 1) {
      result += many;
    }
  }
  return result;
}

const a = [3, 4, 3, 4, 3, 2, 7, 0, 6, 90000, 90001];

console.log(ranks(a));
