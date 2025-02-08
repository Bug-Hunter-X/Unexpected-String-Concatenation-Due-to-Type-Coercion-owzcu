# Unexpected String Concatenation in JavaScript

This repository demonstrates a common, yet sometimes unexpected, behavior in JavaScript related to type coercion during addition.  When adding a number and a string, JavaScript will implicitly convert the number to a string and perform string concatenation instead of numerical addition.

## The Bug

The `bug.js` file contains a simple function that adds two arguments. However, when one argument is a number and the other is a string, the result is string concatenation rather than numerical addition.

## The Solution

The `bugSolution.js` file demonstrates how to explicitly convert the inputs to numbers using `parseInt()` or `parseFloat()` before performing the addition to ensure the correct numerical result.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and run it using a JavaScript runtime (Node.js for example).
3. Observe the unexpected output.
4. Open `bugSolution.js` and run it. Note the corrected output.