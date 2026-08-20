
/*
SimpleIf: this is applicable for validating single true condition

equality
=============
1.loose equality ==

3.strict equality ===
*/


//validate current year 2026

console.log("program started.....");

let Year=2026;

if(Year===2026)
{
console.log("Year matched....: "+year);

}

console.log("program ends.....");


/*
Automation testing
--------------
url address should have protocal(http/https)
*/

console.log("-------------");
let baseUrl="https://www.google.com";

if(baseUrl.includes("https"))
{
    console.log("Url is is as per standard");
    
}

console.log("-------------");

//partail data(string)validate includes()
let expUrl="https://www.google.com"
let actUrl="https://www.google.com";
if(actUrl === expUrl)
{
console.log("URL's are the same!");
}

console.log("-------------");
//url should not be null

if(actUrl !== null)
{
console.log("Url is not null");

}