
# JavaScript_Beginner_Practice_questions
This contains the Approaches and the codes for the Question s practice for the javascript language.

# Basic JavaScript Programming Assignment

This repository contains solutions to basic JavaScript programming problems.

Below are the problems along with the approach used to solve each one.

---

## 1. Print Numbers from 1 to 10

### Approach
A `for` loop is used starting from 1 and running until 10.  
In each iteration, the current value of the loop variable is printed using `console.log()`.  
This demonstrates basic loop execution.

---

## 2. Print Numbers from 1 to N

### Approach
A variable is used to store the value of `n`.  
A `for` loop starts from 1 and runs until the value of `n`.  
Each number is printed sequentially.  
This shows how loops can work dynamically with user-defined limits.

---

## 3. Print Numbers from A to B

### Approach
Two variables are initialized to represent the starting value (`a`) and ending value (`b`).  
A loop begins at `a` and continues until `b`.  
Each number in this range is printed.  
This demonstrates how to print numbers within a specific interval.

---

## 4. Print Even Numbers from A to B

### Approach
A loop runs from `a` to `b`.  
Inside the loop, the modulus operator (`%`) is used to check if a number is divisible by 2.  
If the remainder is 0, the number is even and is printed.  
This introduces conditional checking inside loops.

---

## 5. Print Odd Numbers from A to B

### Approach
A loop iterates from `a` to `b`.  
Each number is checked using the modulus operator.  
If the remainder is not 0 when divided by 2, the number is odd and is printed.  
This reinforces conditional logic within iteration.

---

## 6. Factorial of a Number

### Approach
A variable is initialized with value 1 to store the result.  
A loop multiplies this variable with numbers in a sequence.  
The final result represents the factorial value.  
This demonstrates cumulative multiplication using loops.

---

## 7. Fibonacci Series

### Approach
The first two numbers of the Fibonacci sequence are initialized as 0 and 1.  
A loop is used to generate the next numbers by adding the previous two numbers.  
After each calculation, the values are updated for the next iteration.  
This demonstrates sequence generation using iterative logic.

---

## 8. Sum of Digits of a Number

### Approach
A `while` loop runs as long as the number is greater than 0.  
The last digit is extracted using the modulus operator (`% 10`).  
This digit is added to a sum variable.  
The number is reduced by removing the last digit through division.  
This continues until all digits are processed.  
This demonstrates digit extraction and number manipulation.

---

## 9. Palindrome Number

### Approach
The original number is stored in a temporary variable.  
The number is reversed by extracting digits one by one.  
Each extracted digit is added to a new reversed number in proper position.  
After the loop finishes, the reversed number is compared with the original number.  
If both are equal, the number is a palindrome.  
This demonstrates reversing logic and comparison.

---

## 10. Triangle Pattern (Centered)

### Approach
Nested loops are used to generate the pattern.  
The first inner loop prints spaces.  
The second inner loop prints stars.  
With each row, the number of spaces decreases and the number of stars increases.  
This demonstrates pattern printing using nested loops.

---

# Concepts Covered

- For Loop
- While Loop
- Nested Loops
- Conditional Statements
- Modulus Operator
- Number Manipulation
- Pattern Printing
- Logical Thinking


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.