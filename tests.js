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
})