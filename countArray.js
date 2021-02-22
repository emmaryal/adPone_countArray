const countChar = (string) => {
  let arr = (count = []);

  string.replace(/(.)\1*/g, function (str, char) {
    count = [char, str.length];

    arr.push(count);
  });

  return arr;
};
