/*
Function
---------
Group of statements to perform a specific function

In JS - 2 types of Function
1. Function Declaration(old)
2. Function Expression (modern)
    2.1 Anonymous function (without name)
    2.2 Arrow function
*/

console.log("----------------function declaration--------");

//define function
function test1()
{
    console.log("Test1() is called");
}
test1();

console.log("----------------anonymous function declaration--------");
//anonymous function
let test2 = function()
{
    console.log("Test2() is called");
}
test2();

console.log("----------------arrow (Short hand) function declaration--------");
let test3 = () => {
    console.log("Test3() is called");
}
test3();