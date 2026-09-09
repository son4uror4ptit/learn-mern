export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
export function multiply(a, b) {
    return a * b;
}
export function abc(a, b) {
    return a / b;
}
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Khong the chia cho 0");
  }
  return a / b;
}