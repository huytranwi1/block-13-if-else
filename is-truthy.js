// if our value is truthy we will print true

// if our value is falsy we will print false

// we know that :
                // non-empty string is true

                // false will need to print "The boolean value false is falsy"

                // null will print "The null value is falsy"

                // undefined will print "undefined is false"

                // 0 will print "The number 0 is falsy (the only falsy number)"

                // "" will print "The empty string is falsy (the only falsy string)"

// will need to have an if/else conditional statement
// since we need to print multiple statement, we will need multiple if/else
// and we will need multiple function as well

let truthy = "I am string"
if(truthy) {
    console.log("true")
}

let falsy = false;
if(falsy) {
    console.log("The boolean value false is falsy")
}

let falsy = null;
if(falsy) {
    console.log ("The null value is falsy")
}

let falsy = undefined;
if(falsy) {
    console.log("undefined is falsy")
}

let falsy = 0;
if(falsy) {
    console.log("The number 0 is falsy (the only falsy number)")
}

let falsy = "";
if("") {
    console.log("The empty string is falsy (the only falsy string)")
}