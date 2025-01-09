// Link to video: https://www.youtube.com/watch?v=PkZNo7MFNFg

console.log("Hello World") // Open concole and youll see hello world in the console. 

/* Data Type: 

undefined (a varible that hasnt been set to anything), null, boolean, string, symbol (a unquie value), number and object */

//declaring varables:

var myName = "Ibrahim";
Myname = 8;

let city = "Leicester";

Const totalAmount = 15; 

var a; // Delcared variable but undefined or unitialised as value has not been set. 
var b = 2; // Initialsing variable to an inital value at the same time its declared. 
a = 7; // variable has now been assigned to value 7 (assigning a variable). We didnt need to delcare a as we did that ealier. 
console.log(a) // Return 7 in the console. 

// Reassigning variables: 

var x = 20;
x = 15;  

// Adding, subtracking, multiplying and deviding; 

var sum = 10+5; 
console.log(sum); // Console will return 15. 

var difference = 10-5; 
console.log(difference); 

var product = 8*10; 
console.log(difference); // return 80

var quote = 20/5; 
console.log(quote); // return 4 

// Increamenting numbers (add 1 a variable)

var myVar = 99; 
myVar = myVar + 1; 
myVar++; // Using the double plus sign we increament the variable and reassing it with the added 1. 

// Decreamenting Numbers: 

var myVar = 99; 
myVar = myVar - 1 or myVar = 99 - 1; 
myVar--;

// Decimals (known as floats) Adding, subtracking, multiplying and deviding is done in the same manner; 

var myDecimal = 5.7; 

// Finding a remainder (use the % which gives the remainder of 2 numbers devided. We use this opperator to determine if a number or variable is even or odd by deviding by 2.  

var remainder = 11%3;
console.log(remainder); // returns a remainder of 2. 

// Compound assignment with a agumented additon (+=)

var a = 12; 
a = a + 12;
a+=12; 

// Compound assignment with a agumented subtracking (-=)

var a = 12; 
a = a - 12;
a-=12; 

// Compound assignment with a agumented multiplying (*=)

var a = 12; 
a = a * 12;
a*=12; 

// Compound assignment with a agumented devide (/=)

var a = 12; 
a = a / 12;
a/=12; 

// Declaring string variable: 

var firstName = "Ibrahim" // The string "ibrahim" is known as a string literal.

// Escaping literals quote in strings (/): 

var myStr = "I am a string inside "double quotes""; // JavaScript treats this sentence as seperate string and we want it to treat it as one string. This is where an escape character comes in. 
var myStr = "I am a string inside\"double quotes\"";
console.log(myStr) //returns "I am a string inside "double quotes"". Yes there is extra quotes but JavaScript see this string as one string rather then seperate strings. We could just use a single and double quote too. 

// Concatinating strings with plus operator 

var ourStr = "I come first." + "I come second.";
console.log(ourStr); // returns I come first. I come Second. 

// Concatinating strings with += operator:

var ourStr = "I come first.";
ourStr += "I come second.";
console.log(ourStr); // returns I come first. I come Second. 

// Concatinating string with variables: 

var ourName = "freecodecamp"
var ourStr = "hello, our name is" + ourName + ", how are you?"

// Appending variables to strings: 

var ourStr = "freecodecamp is"; 
var anAdjective = "awsome!";
ourStr += anAdjective; // we have assigned varialbe ourStr to a new variable its self and anAdjective combined will return freecodecamp is awsome!

// Find length of string (property called .length):

var firstName = "Ibz"
var firstNameLength = firstName.length;
console.log(firstNameLength); // Returns 3

// Bracket notation to find first character in string:

var firstName = "Ibz"
var firstLetterFirstName = firstName [0]; 
console.log(firstLetterFirstName); // return "I"

// Bracket notation to find last character in string:

var firstName = "Ibz"
var lastLetterFirstName = firstName[firstName.length-1]; // Very important. The brackets calculate the last letter position then that number gets passed onto the firstName returning the letter. 
/* 

var lastLetterFirstName = firstName[firstName.length-1] 

var lastLetterFirstName = firstName[2] 

var lastLetterFirstName = z 

*/ 

// String Immutability (Meaning strings carnt be altered once created as per chacter in a string.)

var Str = "Jello world"; 
myStr[0] = "H"; // We carnt actually do this as all the chacters in the variable above are imutiable. 
Str = "Hello World" // We just have to reassgin the variable. 







