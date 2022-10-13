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
    if(input === "Alex" || "Jane" || "Pat") {
        return "Hello, " + input + "!";
    } else{
        return ""
    }
}