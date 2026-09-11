function thuVar() {
  if (true) {
    var x = 1;
  }
  return x;
}
function thuLet() {
  {
    let y = 1;
  }
  return y;
}
console.log(thuVar());
console.log(thuLet());
