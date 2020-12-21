function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    return ("Hello, " + input + "!");
}

function isFive(){
    return "5";
}

function isEven(number){
    return number % 2  === 0;
}

function isVowel(vowel) {
    return vowel.toLowerCase() === "i" ||
           vowel.toLowerCase() === "a" ||
           vowel.toLowerCase() === "e" ||
           vowel.toLowerCase() === "o" ||
           vowel.toLowerCase() === "u";
}

function add(a, b) {
    return  parseInt(a) + parseInt(b);
}