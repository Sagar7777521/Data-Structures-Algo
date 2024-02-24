function recurfact(n) {
  if (n === 0) {
    return 1;
  }
  return n * recurfact(n - 1);
}
console.log(recurfact(5));
