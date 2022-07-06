// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
let isMale = true;
let gender = isMale ? "male": "female;"
console.log(gender);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let givenVariable1 = 9;
let givenVariable2 = 1;
if(givenVariable1 || givenVariable2 ===8){
    if(givenVariable1 === 8){
        console.log("Variable 1 equals eight!");
    }
    if(givenVariable2 === 8){
        console.log("Variable 2 equals eight!");
    }
}
if(((givenVariable1-givenVariable2)===8)){
        console.log("Variable 1 - Variable 2 equals eight!");
        
}else if(((givenVariable2-givenVariable1)===8)){
        console.log("Variable 1 - Variable 2 equals eight!");

}else if(((givenVariable2+givenVariable1)===8)){
        console.log("Variable 1 + Variable 2 equals eight!");

}else{
        console.log("Sorry no eights. :'(");
}


/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let exercise3Var = 3;
console.log("There "+ "are", exercise3Var, "strings in this log.");

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let exFour1 = 3;
let exFour2 = 2;
let exFour3 = 1;
let newArray =[];
let generatedArray=[];
//input where it adds to array until done
newArray=[exFour1,exFour2,exFour3];
let arrayLength= newArray.length;
for(i=arrayLength; i>0; i--){
    for(j=0; j<=arrayLength; j++)
        if(newArray.length >=2){
          if(newArray.indexOf(j)>=newArray.indexOf(j-1)){
                //splice?
            }  
        }
        

}



/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let num01 = 1;
let num02 = 3;
let average = ((num01+num02)/2);
console.log(`The average of ${num01} & ${num02} is ${average}.`);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let ex6Given1 = "hi";
let ex6Given2 = "hello";
/* let longerString = (length(ex6Given1) >= length(ex6Given2)) ? ex6Given1:ex6Given2; */
let longerString = (ex6Given1.length>= ex6Given2.length) ? ex6Given1:ex6Given2;
console.log(`The longer sting is ${longerString}.`);


/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let ex7Given = 123.4;
console.log(Number.isInteger(ex7Given));

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let percentage = 20;
percentage = percentage/100;
let givenNumber8 = 80;
percentOfGiven = percentage * givenNumber8;
console.log(`${(100*percentage)} percent of ${givenNumber8} is equal to ${percentOfGiven}`);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/
let usersInput = 333;
function isOdd(usersInput){return usersInput % 2;}
    if(isOdd(usersInput) !== 0){
        console.log("Your number is even.");
    }else if (isOdd(usersInput) === 0){
        console.log("Your number is odd.");
    }else{
        console.log("Not a valid Number.");
    }
    
        

