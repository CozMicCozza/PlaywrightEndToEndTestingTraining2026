/*
Scenario:
If score is > 90 then grade = A
if score is => 95 then grade = A++
otherwise grade is B


*/

let score=91;

if (score>90)
{
    if (score>=95)
    {
        console.log("A++");   
    }else{
        console.log("A");
    }
}else{
    console.log("B");
}