function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function hello(firstName, location, hobby) {
  console.log(
    "Hi, my name is " +
      firstName +
      " I live in " +
      location +
      " and enjoy " +
      hobby
  );
}

console.log(add(1, 3));
console.log(substract(1, 3));
console.log(multiply(1, 3));
console.log(divide(1, 3));
hello("Neeti", "Bangkok", "Woodworking");
