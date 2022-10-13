// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function subtract(x, y){
    if(typeof x === "number" && typeof y === "number"){
        return x - y
    } else {
        return false;
    }
}

function sayHello(input){
    if (input === false) {
        return "Hello, World!"
    } else if(input === "Alex" || "Jane" || "Pat") {
            return "Hello, " + input + "!";
    } else{
        return ""
    }
}

function isFive(x){
    if (x === 5){
        return true;
    }else if(typeof x === "boolean"){
        return "boolean";
    }else {
    return false;
}
}

function isEven(num){
    if (num % 2 === 0){
        return true;
    } else if (typeof num === "boolean") {
        return "boolean";
    } else {
        return false;
    }
}

function isVowel(v) {
    if (typeof v === "boolean") {
        return "boolean";
    } else if (v === 'a' || v === 'A' || v === 'e' || v === 'E' || v === 'i' || v === 'I' || v === 'o' || v === 'O' || v === 'u' || v === 'U'){
        return true;
    } else {
        return false;
    }
}

function add(a,b){
    if(isNaN(a) !== "number" || isNaN(b) !== "number"){
        return parseInt(a) + parseInt(b)
    } else {
        return false;
    }
}