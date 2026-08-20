/*
1. Arithmetic Operator: +,-,*,/,%
2. Unary operator: ++ increment -- Decrement
3. Relational operator:  >, =>, <, <=
    Equality
    1. Loose ==
    2. Strict equality ===
4. Logical operator:  &&(and), ||(or), !(not)


*/
console.log("-----Arithmaatic operation-----");

let a=10, b=2;
console.log("Addition is :" +a+b);//102 - due to concatenation
console.log("Addition is :" +(a+b));//12
console.log("Subtraction is :" +(a-b));//8
console.log("Multiplication is :" +(a*b));//20
console.log("Division is :" +(a/b));//5
console.log("Modulus is :" +(a%b));//0


let x=100;
console.log(x); //100
console.log(++x); //101
console.log(x); //101

let y=90;
console.log(y); //90
console.log(y++); //90
console.log(y); //91

let s=99, m=8, n=18,k=l=77, r=188, t=189, i=j=101;

console.log("Less than operator < : "+(m<n));//true
console.log("Less than or equal operator <= : "+(i<=j));//true
console.log("Less than operator < : "+(t<r));//false

/*
Loose equality == (Convert to same type and compare)
strict equality === (Iverify Value and Type are the same)
*/

console.log("100" == 100);//true
console.log("100" === 100);//false

console.log(null == undefined);//true
console.log(null === undefined);//false