// if our value is truthy we will print true

// if our value is falsy we will print false

// we know that if falsy it will print the following:
                // non-empty string is true

                // false will need to print "The boolean value false is falsy"

                // null will print "The null value is falsy"

                // undefined will print "undefined is false"

                // 0 will print "The number 0 is falsy (the only falsy number)"

                // "" will print "The empty string is falsy (the only falsy string)"

// in this case we will create a function that have a variable take in a values that the user can change the input value then print out the statement depend on true or false.

// user can input the given value in the function, then console log should give the answer base on true or false
const inputValue = "I am a string";

if(inputValue) {
    console.log("true")
} else {
    console.log("The boolean value is falsy")
}

