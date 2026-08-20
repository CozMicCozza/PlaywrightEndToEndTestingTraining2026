/*
What is a variable
------------------
Variable is name of storage location where we can store data

To declare varaible in JS we use Keywords
-----------------------------------------
1. var (old)

Modern Js
2. let (mutable data - can be changed)
3. const (static - cannot be changed)

Syntax
------
let/const varaibleName = value;
Example:
let age = 54;
let fName = "Corry";

DataType
--------
DataTypes define the type of data stored into a variable
JS is dynamnmic so we do not need to define the data type

in JS everything is an Object
-----------------------------
String/Number/Boolean/Array etc.

JS supports 2 types of data type
--------------------------------
1. Primitive (Primary)
----------------------
    1. number
    2. string
    3. boolean
    4. undefined
    5. null
    Added after ES6 but not used for Automation
    6. bigint
    7. symbol

2. Non-Primitive(Data in format of the object/reference details)
    Object
    Array

    typeof operator
    ---------------
    In Js to check data tyoe of variable
*/

console.log("-----------number-------------");
/*
Every number like any positive integer or negative integer,
decimal digit number is reporesented in Js as a number type
*/

let num1 = 100;
console.log(num1); //100
console.log(typeof num1); //number

let num2 = -100;
console.log(num2); //-100
console.log(typeof num2); //number

let num3 = 89.78;
console.log(num3); //89.78
console.log(typeof num3); //number

console.log("-----------------");

let age = 26;
console.log(typeof age);
age = true;
console.log(typeof age);
age = "jay";
console.log(typeof age);

console.log("----------boolean (true/false)-------------");
let isActive = true;
console.log("Is student active?:", isActive);//true
console.log(typeof isActive);//boolean

let isEmployed = false;
console.log("Is student Employed?:", isEmployed);//false
console.log(typeof isEmployed);//boolean

console.log("----------string-------------");
/*
String is a colelciton og characters

In JS 3 ways to declare
1. single quote
2. double quote
From ES6
3. template string(using backtick : `Hello`)
*/

let fName = 'Corry';
console.log("First Name is:", fName);
console.log(typeof fName);
let lName = "Littlefair";
console.log("Last Name is:", lName);
console.log(typeof lName);
let email = `a@b.com`;
console.log("Email is:", email);
console.log(typeof email);


//Read external date into template string.
// use ${variableName}
let cYear = 2026;
let diskSize = "2 TB";
/*
Template string definition - use for API testing:
*/
let requestPayload =`
{
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": ${cYear},
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "${diskSize}"
  }
}
`

console.log("Payload is:", requestPayload);
console.log(typeof requestPayload);


console.log("----------undefined-------------");
/*
when declare any varaible without initialisation,
Value and type of that variable will become undefined.
*/

let dateOfBirth;
console.log(dateOfBirth);//undefined
console.log(typeof dateOfBirth);//undefined

console.log("----------null-----------");
//null is unkonwn data
let policyDate = null; 
console.log(policyDate);//null
console.log(typeof policyDate);//object

console.log("----------ES6-----------");
//BigInt (Not for automation)
console.log("Max number in JS: " + Number.MAX_VALUE); //1.7976931348623157e+308

//bigInt: biggest number to store, use n as suffix
let num= 8779890887766545353234234n;
console.log(num);//8779890887766545353234234n
console.log(typeof num);//bigInt

console.log("----------JS Object-----------");
//Object literal way
// In js Object defined with {}
let user = {};
console.log(user);//Empty Object
console.log(typeof user);//Object

let person = {
    fName: "Corry",
    lName: "Littlefair",
    id: 101
};
console.log(person);//Object
console.log(typeof person);//Object

/*symbol: used to define unuque properties of an Object (Not for Automation)
 symbol type is used to declare unique identifier (variable)
*/

console.log("----------Symbol-----------");

let profile1 = Symbol("QA");
console.log(profile1);//Symbol(QA)
console.log(typeof profile1);//symbol

let profile2 = Symbol("QA");
console.log(profile2);//Symbol(QA)
console.log(typeof profile2);//symbol

// Strict Equality '==='
console.log(profile1 === profile2);

console.log("---------------------");

//Object literal

let product = {
  name:"iPhone",
  price:1500
};

//access properties from object
//1. Dot Notations
//2. btacket notation

console.log(product.name);
console.log(product["price"]);

product.price=1800;
console.log(product);

//unique property added to object -> Symbol
let id=Symbol('pid');
product[id]=1010;
console.log(product);

// to update symbol type data
product.pid=2020;//Adds new
product[id]=3030;//updates defined symbol
console.log(product);









