function foo(a, b) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if(isNaN(numA) || isNaN(numB)){
    return 'Invalid input: Inputs must be numbers or number-like strings';
  }
  return numA + numB;
}

console.log(foo(1, '2')); // Output: 3
console.log(foo('1.5', 2)); // Output: 3.5
console.log(foo('abc', 2)); // Output: Invalid input: Inputs must be numbers or number-like strings