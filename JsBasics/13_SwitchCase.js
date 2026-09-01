/*
Switch case for multiple condition validation

Key === value
- We dont use any methods or operators in case
- We can use break in every case
- Break statement to ecit switch case body/scope

- only use break with Switch and Loop

*/

// traffic lights

let colour="red"
switch(colour){
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("READY");
        break;
    case "green":
        console.log("GO");
        break;
    default:
       console.log("ERROR");
}

console.log("----------------------");

//browser validation for switch case

let browserName="   chRome";

switch(browserName.trim().toLowerCase())
{
    case "chrome":
        console.log("Test case on CHROME");
        break;
    case "edge":
        console.log("Test case on EDGE");
        break;
    case "chrome":
        console.log("Test case on FIREFOX");
        break;
    default:
        console.log("INVALID");
}

console.log("---------------");

//calculator

let num1 = 10, num2 =30;
let operator="-";

switch (operator){
    case "+":
        console.log("Addition is: "+(num1+num2));
        break;
    case "-":
        console.log("subtraction is: "+(num1-num2));
        break;
    case "*":
        console.log("Multiple is: "+(num1*num2));
        break;
    case "/":
        console.log("division is: "+(num1/num2));
        break;  
    default:
        console.log("----ERROR----");
        break;
        
}

