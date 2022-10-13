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

describe("subtract", function(){
    it("should be a defined function", function() {
        expect(typeof subtract).toBe("function")
    })
    it("should return a number when passed two number arguments", function(){
        expect(typeof subtract(3,1)).toBe("number")
    })
    it("should return false when any argument that is not a number", function() {
        expect(subtract()).toBe(false);
        expect(subtract(2)).toBe(false);
        expect(subtract("banana",6)).toBe(false);
    });
    it("should return 34 when passed the argument of 64 and 30", function(){
        expect(subtract(64, 30)).toBe(34);

    })
})

describe("sayHello", function(){
    it("should return a string when called.", function (){
        expect(typeof sayHello()).toBe("string");
    })
    it("should return hello, Jane! when called Jane.", function (){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    })
    it("should return hello, Alex! when called Alex.", function (){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
    it("should return hello, Pat! when called Pat.", function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it("should return hello, world", function(){
        expect(sayHello(false)).toBe("Hello, World!")
    })
})

describe("isFive", function (){
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    })
    it("should return a boolean when called.", function (){
        expect(typeof isFive()).toBe("boolean");
    })
    it("should return a 5 as true.", function (){
        expect(isFive(5)).toBe(true);
    })
})

describe("isEven", function(){
    it('should be a defined function', function(){
        expect(typeof isEven).toBe('function');
    })
    it("should return a boolean when called.", function(){
        expect(typeof isEven()).toBe("boolean");
    })
    it("should return a 2 as true.", function (){
        expect(isEven(2)).toBe(true);
    })
    it("should return a -4 as true.", function (){
        expect(isEven(-4)).toBe(true);
    })
    it("should return a 3 as false.", function (){
        expect(isEven(3)).toBe(false);
    })
    it("should return 'banana' as false.", function (){
        expect(isEven("banana")).toBe(false);
    })
    it("should return a '8' as true.", function (){
        expect(isEven('8')).toBe(true);
    })
    it("should return infinity as false.", function (){
        expect(isEven(Infinity)).toBe(false);
    })
    it("should return false as false.", function (){
        expect(isEven("false")).toBe(false);
    })
    it("should return true as false.", function (){
        expect(isEven("true")).toBe(false);
    })
    it("should return empty as false.", function (){
        expect(isEven()).toBe(false);
    })
})

describe("isVowel", function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    })
    it("should return a boolean when called.", function () {
        expect(typeof isVowel()).toBe("boolean");
    })
    it("should return a as true.", function (){
        expect(isVowel("a")).toBe(true);
    })
    it("should return A as true.", function (){
        expect(isVowel("A")).toBe(true);
    })
    it("should return y as false.", function (){
        expect(isVowel("y")).toBe(false);
    })
    it("should return 4 as false.", function (){
        expect(isVowel(4)).toBe(false);
    })
    it("should return true as false.", function (){
        expect(isVowel("true")).toBe(false);
    })
    it("should return false as false.", function (){
        expect(isVowel("false")).toBe(false);
    })
    it("should return banana as false.", function (){
        expect(isVowel("banana")).toBe(false);
    })
    it("should return empty as false.", function (){
        expect(isVowel()).toBe(false);
    })
})

describe("add", function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    })
    it("should return a number when passed two number arguments", function () {
            expect(typeof add(3,1)).toBe("number")
        });
    it("should return 5 when passed the argument of 2 and 3", function(){
        expect(add(2, 3)).toBe(5);
    })
    it("should return -12 when passed the argument of -3 and -9", function(){
        expect(add(-3, -9)).toBe(-12);
    })
    it("should return 11 when passed the argument of '5' and 6", function(){
        expect(add("5", 6)).toBe(11);
    })
    it("should return 6 when passed the argument of '-4' and '10'", function(){
        expect(add('-4', '10')).toBe(6);
    })
    it("should return NaN when passed the argument of banana and split", function(){
        expect(!isNaN(add("banana", "split"))).toBe(false);
    })
    it("should return NaN when passed the argument of 2 and apple", function(){
        expect(!isNaN(add(2, "apple"))).toBe(false);
    })
    it("should return NaN when passed the argument as empty", function(){
        expect(!isNaN(add())).toBe(false);
    })
})
