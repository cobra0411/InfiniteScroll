let tempString = "abcdefghijklmnopqrstuvwxyz";
export const generateData = (page, size) => {
  let result = [];
  for (let i = 0; i < size; i++) {
    let temp = "";
    for (let j = 0; j < 10; j++) {
      let num = parseInt(Math.random() * 100, 10);
      num = num % 26;
      temp += tempString.substr(num, 1);
    }
    result.push(temp);
  }
  return result;
};
