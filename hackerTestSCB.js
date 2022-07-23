function long(sentence) {
  let arrayString = sentence.split(" ");
  if (arrayString.length < 2) return "00";
  let result = "";
  arrayString.forEach((str) => {
    if (str.length > result.length) {
      result = str;
    }
  });
  return result;
}

const sentence = "You can do it the way you";
console.log(long(sentence));

// ถ้ามีคำยาวซ้ำ เอาคู่แรกมา
// ไม่มีตัวเลข
