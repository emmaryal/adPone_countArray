function countChar(string) {
  const splitStr = string.split("");
  let a = b = c = 0;

  let count_a = ["a", a];
  let count_b = ["b", b];
  let count_c = ["c", c];
  for (i = 0; i < string.length; i++)
    switch (splitStr[i]) {
      case "a":
        count_a[1]++;
        break;
      case "b":
        count_b[1]++;
        break;
      case "c":
        count_c[1]++;
        break;
      default:
        break;
    }
  return (count = [count_a, count_b, count_c]);
}
