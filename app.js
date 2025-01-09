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

// Empty string with quote (used to initalised the variable that will later hold string data.)

var myName = ""; 

// Store multiple values with arrays (hold multiple values): 

var ourArray = ["John", 23]; 

// Nested array: 

var ourArray = [["the universe, 42"], {"everything", 1001}];

// Accessing array with indexs. 

var myArray = [20,30,40]; 
myArray[1]; // return 30 
var myData = myArray[1] // storing in a variable

// Modify array data with indexes:

var myArray = [20,30,40]; 
myArray[1] = 45; // updates the value 30 to 45 in the array. 

// Accessing values in nested array; 

var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]]; 

var myArray[0][0]; // use double bracket notation the first 0 acess the first array within the array [1,2,3] then the other 0 will access the number 1 the digit with the first position. 

var myData = myArray[0][0]; 

// another example: 

var myArray[2][2]; // return number 8 in the array. 

// Manipulate Arrays with Push () function (adds a new element to the end of the array)

var ourArray = [1,2,3]; 

ourArray.push("happy","joy"); 

// updated array 

var myArray = [1,2,3,"happy","joy"]; 

// Adding an array within an array

var ourArray = [1,2,3]; 

ourArray.push[("happy","joy")];

// updated array

var Array =  [1,2,3,["happy","joy"]]; 

// Manipulate arrays with unshift() (Add a new element to the start of the array)

var ourArray = [1,2,3]; 

ourArray.unshift("happy","joy"); 

// updated array 

var ourArray = [1,2,3,"happy","joy"];

// Manipulate Arrays with shift() function (removes the first element of an array)

var ourArray = [1,2,3]; 

ourArray.shift();

// updated array: 

var ourArray = [2,3]; 

// another example array within an array; 

var ourAray =["John","R",["kitty"]];
ourArray.shift(); // Will remove john from the array. Takes the first array within the array and then the first value it finds. 


// Manipulate Arrays with pop() function (removes the last element of an array)

var ourArray = [1,2,3]; 

ourArray.pop(); // removes the last value from the array (3).

// updated array: 

var ourArray = [1,2]; 


// Writing reuseable code with functions: 

function ourReuseableFunction() {console.log("hello world")}; 

ourReuseableFunction(); 

// Passing values to functions with arguments (prams are variables that act as place holders for the values that are to inputted into a function when its called): 

function ourFunctionWithArgs(a,b){console.log(a-b)}; 

ourFunctionWithArgs(10,5);  // outputs 5

// Global scope and function): go back to video 55mins in.

/* Scope referce to the visabilities of variables. Variables that are defined outside of a function block - function name (){functionblock}; have global scope. 
global scope means that they can be seen everywhere witin your JavaScript code. */ 

//Local scope and functions (variable declared within a functions including variables in its pramiters have local scope, meaning they are only within the function): 

function myLocalScope() {
var myVar=5;
console.log(myVar) // output 5 
};  
console.log(myVar); // This will produce an error as this variable has a local scope and cannot be called outside the function. Above you can see we had accessed the variable through console.log() with the variable inside and thats fine as its within the function. 

// Global vs local scope in functions: 















                           











