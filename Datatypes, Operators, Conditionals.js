/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

//String - Characters and munbers treated as characters
//Number - numbers integers and flaots
//Boolean - T/F - 1/0
//Null - empty value
//Undefined - value not yet assigned
//Symbol - unique identifier for properties
//BigInt - a very large number
//Object - something like an array with named indicies

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

//A variable is a container that can hold data. Like a box that you can fill with something. 

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let exercise3Sum = (12+20);
console.log(exercise3Sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/
let exercise4Var = 12;
console.log(exercise4Var);


/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let exercise5Var = "John Doe";
console.log(exercise5Var);

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let exercise6Dif = exercise4Var - 12;
console.log(exercise6Dif);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
let nameDifference = (name1 != name2);
console.log(nameDifference);
//Pt 2?


/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/


let x = 9;


switch(x){
    case 0:
        x<=0;
        console.log("zero");
        break;
    case 1:
        x===1;
        console.log("one");
        break;
    case 2:
        x===2;
        console.log("two");
        break;
    case 3:
        x===3;
        console.log("three");
        break;
    case 4:
        x===4;
        console.log("four");
        break;
    case 5:
        x===5;
        console.log("five");
        break;
    case 6:
        x===6;
        console.log("six");
        break;
    case 7:
        x===7;
        console.log("seven");
        break;
    case 8:
        x===8;
        console.log("eight");
        break;
    case 9:
        x===9;
        console.log("nine");
        break;
    default:
        console.log("invalid");
}


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let age = 20;
let minDrivingAge = 16;
let canDrive = (age>= minDrivingAge)? "Yes you can drive." : "No, you can't drive, yet.";
console.log(canDrive);
