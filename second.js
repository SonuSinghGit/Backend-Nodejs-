function swap(a, b) {
  a = a + b; // 32
  b = a - b; // 12
  a = a - b; // 20

  return [a,b]
}

const res = swap(12, 20);
console.log(res);
