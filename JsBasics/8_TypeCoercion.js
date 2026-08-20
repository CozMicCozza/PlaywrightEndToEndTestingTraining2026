/*
Type casting
------------
One type of date convert to another type

In JS we have 2 types
1. Type coercion (implicit type cast)
    - It is automatically converted if compatible
    - Is reponsibility of JS engine

2. Explicit casting
    - Manual conversion as per eequirement
    Number()
    String()
    Boolean()

Constructor
-----------
Method to initialise Object
Used in a class structure

Boolean Conversion
------------------
truthy and falsy
----------------
- Any value that is true in boolean is truthy
ex: any non zero value, non-empty string

- Any value that is false in boolean is falsy
ex: 0, Nan, "", undefined, null

*/

console.log("-----Type Coercion (Implicit)-----");
console.log("-----String Conversion-----");

/*
boolean/number -> convert into -> string

When expression is written with a '+', the number/boolean/string is 
coerced into a string (concatenation)
*/

let a="Hello" + 190;// number added and coerced to string
console.log(a);//Hello190
console.log(typeof a);//string

let b="10"+20+50;
console.log(b);//102050
console.log(typeof b);//string

let b2=10+20+"50";
console.log(b2);//3050
console.log(typeof b2);//string

let c=true+50+"100";
console.log(c);//51100
console.log(typeof b);//string

let d="90"+true+45+"10";
console.log(d);//90true4510
console.log(typeof d);//string

console.log("-----String Conversion-----");

/*
string/boolean -> convert into -> number

When expression is written with number/boolean/string and operators like -,*,/ used
then string (compatible)/boolean is coerced into a number
*/

let i="100"/10; //string coerced into number
console.log(i);//10
console.log(typeof i);//number

let j="Hi"/5; //string NaN
console.log(j);//NaN
console.log(typeof j);//number

let r=90-"30"; //
console.log(r);//60
console.log(typeof r);//number

let r2=90-"30"*true; //
console.log(r2);//60
console.log(typeof r2);//number

let y="78"-15+100+"56"; //
console.log(y);//16356
console.log(typeof y);//string

console.log("-----Explicit Casting-----");

//string (compatible) -> number: Number()

let t="1234";
console.log(typeof t);//string
let stringToNumber = Number(t);
console.log(stringToNumber);//1234
console.log(typeof stringToNumber);//number

//number.boolean -> striong : String()
let num=89;
console.log(typeof num);//number
// number to string: String()
let numberToSting = String(num);
console.log(numberToSting);//"89"
console.log(typeof numberToSting);//string

console.log("----------");

/*
Scenario: Amount validation
"Your total amount is 5000"
Validate this bill message is less than 10000
*/

let bill = "Your total amount is 5000";
let value = Number(bill.split(" ")[4]);
console.log(typeof value);//number
console.log(value);//5000

if(value<10000)
{
    console.log("Value less than 10000");
}else{
    console.log("Value over 10000");
}


/*
Boolean Conversion
------------------
truthy and falsy
----------------
- Any value that is true in boolean is truthy
ex: any non zero value, non-empty string

- Any value that is false in boolean is falsy
ex: 0, Nan, "", undefined, null

*/
console.log(Boolean("jay"));//true
console.log(Boolean(1234));//true
console.log(Boolean(56.77));//true
console.log(Boolean(true));//true
console.log(Boolean(""));//false
console.log(Boolean(0));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false


