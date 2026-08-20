/*
hoisting:
---------
Behjaviour in JS where interpreter allocates memory for Variable, Function, Class or Import
declarations before code execution.
This makes them appear as if they are moved to top of contenting scope

1. memory declare
2. execution

hoisting allow JS to call variable before it is declared.
- Var is fully hoisted and function declaration also fully hoised.
- Let and Const type - are hoisted but they always stay in TDZ( temporal Dead Zone)
If called before declaration - you will get error.

for modern -Anonymous and Arrow functions, before declaration, calling will give error.

*/

test1();//will run

function test1()
{
    console.log("This is a hoisted function declaration");
}

console.log("----------------");

//moder functions:  before declaration - cannot call

test2();// cannot access test2 before initialisation


let test2 = function()
{
    console.log("Hello all");
}

test3();// cannot access test3 before initialisation

let test = ()=>
{
    console.log("Hello all");
}