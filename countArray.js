function countChar(string) {
  let count = [];
  let splitStr = string.split("");
  let a = (b = c = 0);

  let count_a = ["a", a];
  for (i = 0; i < string.length; i++) if (splitStr[i] === "a") count_a[1]++;

  let count_b = ["b", b];
  for (i = 0; i < string.length; i++) if (splitStr[i] === "b") count_b[1]++;

  let count_c = ["c", c];
  for (i = 0; i < string.length; i++) if (splitStr[i] === "c") count_c[1]++;
  

  return (count = [count_a, count_b, count_c]);
}
