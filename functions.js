// 1. Multiply 3 different numbers
function multiply(a, b, c) {
    if (a === b || a === c || b === c) {
        return "Numbers must be different";
    }
    return a * b * c;
}

console.log(multiply(2, 3, 4)); // 24


// 2. Convert minutes to seconds (Function Expression)
const convertToSeconds = function(minutes) {
    return minutes * 60;
};

console.log(convertToSeconds(5)); // 300


// 3. Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

console.log(fahrenheitToCelsius(68)); // 20


// 4. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript")); 


// 5. Count vowels in a string
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Javascript")); // 3


// 6. Check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Testing with 4 numbers
console.log(isPrime(2));  // true
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(15)); // false