/*

1. var (old)
-------------
- Scope : Global & functional
- Redeclaration allowed
- Reassignement for Var is allowed
- Var is hoisted (before declaration0)

Modern Js
2. let (mutable data - can be changed)
----------------------------------------
- Scope; global & Block scope
- redeclaration not allowed
- Ressaignment is allowed
- Let is hoisetd but duie to TDZ(temporal dead zoen) if you access/call before declarion - will error

3. const (static - cannot be changed)
----------------------------------------
- Scope; global & Block scope
- For Immutable data we use const
- redeclaration not allowed
- Ressaignment is not allowed
- const is hoisetd but duie to TDZ(temporal dead zoen) if you access/call before declarion - will error

Syntax
------
let/const varaibleName = value;
Example:
let age = 54;
let fName = "Corry";

Scope:
------
1. Global:
------------
Data declared in global can be accessed everywhere inside file/function and outside

2. Functional
--------------
Data declared inside functioon can only be accessed within that function
like local variablee declaration

3. Block scope
--------------
Data declared ubsude the block

*/

console.log("------- global Scope-------");
var fName = "Corry";
let location = "UK";
const email = "a@b.com";

console.log("first name is: "+fName);
console.log("location is: "+location);
console.log("email is: "+email);

// call fdrom inside function
function test1()
{
    console.log("--Call global from function---");
    console.log("first name is: "+fName);
    console.log("location is: "+location);
    console.log("email is: "+email);
}

test1();

console.log("------------Functional scope-------");

function test2()
{
    var profile="QA";
    console.log("profile is: "+profile);
}
test2();

function test4(){
    let a=20;
    console.log("Value of a: "+a);
    if (true)
    {
        let a=30;
        console.log("Block value of a:"+a);
    }
    console.log("Ouitside block Value of a: "+a);
}

test4();


