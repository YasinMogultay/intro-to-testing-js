// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function() {
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex! when executed ', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat! when executed ', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});

describe('isFive', function (){
    it('should be a defined function', function() {
        expect(typeof isFive).toBe("function");
    });
    it('should return a number when called', function () {
        expect(typeof parseInt(isFive())).toBe("number");
    });
});

describe("isEven", function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return a even number when called', function () {
        expect(isEven(4)).toBe(true);
    });
});

describe("isVowel", function (){
    it('should be a defined function', function () {
        expect (typeof isVowel).toBe("function");
    });
    it('should be a vowel character when called ', function () {
        expect(isVowel("a")).toBe(true);
    });
});

describe("add", function (){
    it('should be a defined function', function () {
        expect (typeof add).toBe("function");
    });
    it('should return sum of two numbers when called ', function () {
        expect(add("5",6)).toBe(11);
    });
});




