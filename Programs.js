// 1. Print Numbers from 1 to 10
console.log("1. Print Numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("----------------------");

// 2. Print Numbers from 1 to N
console.log("2. Print Numbers from 1 to N");
let nValue = 25;
for (let i = 1; i <= nValue; i++) {
    console.log(i);
}

console.log("----------------------");

// 3. Print Numbers from A to B
console.log("3. Print Numbers from A to B");
let a = 5;
let b = 20;
for (let i = a; i <= b; i++) {
    console.log(i);
}

console.log("----------------------");

// 4. Print Even Numbers from A to B
console.log("4. Print Even Numbers from A to B");
for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("----------------------");

// 5. Print Odd Numbers from A to B
console.log("5. Print Odd Numbers from A to B");
for (let i = a; i <= b; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("----------------------");

// 6. Factorial of a Number
console.log("6. Factorial of a Number");
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial:", factorial);

console.log("----------------------");

// 7. Fibonacci Series
console.log("7. Fibonacci Series");
let first = 0;
let second = 1;
console.log(first);
console.log(second);

for (let i = 1; i <= 8; i++) {
    let next = first + second;
    console.log(next);
    first = second;
    second = next;
}

console.log("----------------------");

// 8. Sum of Digits of a Number
console.log("8. Sum of Digits of a Number");
let num = 143;
let sum = 0;

while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
}
console.log("Sum of digits:", sum);

console.log("----------------------");

// 9. Palindrome Number
console.log("9. Palindrome Number");
let original = 2002;
let temp = original;
let reverse = 0;

while (temp > 0) {
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
}

if (reverse === original) {
    console.log("True");
} else {
    console.log("False");
}

console.log("----------------------");

// 10. Triangle Pattern (Centered)
console.log("10. Triangle Pattern");
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let output = "";

    for (let space = 1; space <= rows - i; space++) {
        output += " ";
    }

    for (let star = 1; star <= i; star++) {
        output += "* ";
    }

    console.log(output);
}
