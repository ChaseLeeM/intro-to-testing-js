// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(name) {
    return name === undefined ? `Hello, World!`: `Hello, ${name}!`
}

function isFive(input) {
    return input === 5;
}

function isEven(input) {
    return parseFloat(input) % 2 === 0;
}
