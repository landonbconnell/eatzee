const arrayToString = (arr) => {
  if (arr.length === 0) {
    return "";
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    let lastElement = arr.pop();
    return arr.join(", ") + ", and " + lastElement;
  }
};

module.exports = arrayToString;
