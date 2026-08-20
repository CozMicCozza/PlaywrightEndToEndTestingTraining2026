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

console.log(a);//undefined
var a=10;
console.log(a);//10

console.log("---------------");

console.log(x);//Error - not declared
let x=100;

