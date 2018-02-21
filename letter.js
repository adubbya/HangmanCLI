/// letters.js - letter verification app for HangmanCLI, no requirements

////// CONSTRUCTOR //////
//constructor to define letter guessed by user is correct
var Letter = function (name) {
    //a string variable to store letterActual
    this.name = name;
    // a boolean value for guess correct
    this.guessChecker = false;
};
///// FUNCTIONS /////
// method to return correct letter if user guesses right, return _ if not
Letter.prototype.toString = function () {
    var letterActual = this.name;
    if (this.guessChecker) {
        return letterActual;
        console.log(letterActual); //test
    }
    else {
            return "_";
        console.log("_");
    } 
};
// method to check user input against underlying letter
letterChecker = function (letterGuessed) {

    if ("A" === myGuess.name) { // replace test value "A" with letterGuessed
        myGuess.guessChecker = true;
        console.log("Right: " + myGuess.guessChecker); //test
    }
    else {
        console.log("Wrong: " + myGuess.guessChecker); //test
    }    
};

//tests
var myGuess = new Letter("A");
letterChecker();
console.log(myGuess + ' ');

// export constructor
module.exports = Letter;