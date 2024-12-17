console.log('ahmed\'magdy');
let first,second,fullname;
first = "ahmed";
second = "magdy";
//let fullname = "ahmed magdy"; //each char has index (postion)
//console.log(fullname.slice(0,5));
fullname = first.concat(second);
console.log(fullname);
/*
string => datatype => object => object(property) =>
key ,value 
string.length = size of text
object.key = value
*/

Number("1231")
String(15615)
console.log(String(100) + "ahmed");

//array is group of related varibles

const array = ["my name","is","ahmed","magdy"];
const array2 = ["gaber"];
["my name","is","ahmed","magdy","gaber"]
const array3 = array.concat(array2);
/*
object.property
object[property]
map(key,value)
object[key] = value
array[index] = value
*/
array[2]= "gaber";
array[10] = "hi";
console.log(array);
console.log(array3);
//array = {};
//console.log(array);

//array = list (//data structure)
let x= 5;

console.log(x == "5");
console.log(x === Number("5"));
if(x==10){
    console.log("yes");
}
else if( x== 4){
    console.log("ok");
}
else{
    console.log("no")
}
//inline if
x>4 ? console.log("yes") : console.log("no");

switch(x)
{
    case 10:
        //yes block of code
    case 5:
        //no
    case 4:
        //ok
}
/*
for(let x=1;x<=100;x++){

    if(x%2==1){
        console.log(x);
    }
    
}
*/
//test number for even or odd
//prime numbers : a number that can only be divided by itself
//3%3=0
//3%1=0
/*1%1=0

7%6=1
7%5=2
7%4=3
7%3=1
7%2=1



4%3=1
4%2=0

*/
let number = 25;
function testPrime(x){
    for(let i=2;i<number;i++){ //block / body
        if(number%i==0){
           console.log("not prime");
           return;
        }
    }
    console.log("prime");
}
testPrime(x);

/*
//print all the values in the array 0-100
console.log("first for:");
for(let i=0;i<=10;i++){ //iterator
    console.log(i + ":" +array[i]);
}
console.log("\n2nd for:");
for(let x of array){ //x go visit each variable
    console.log(x);
}
console.log("\n3rd for:");
for(let x in array){
    console.log(x);
}*/

let num = Number(123);
//const array = [1,2,3]
//sum of digits = 6
let total =Number(0);
while(num>=1){
    total +=num%10;
    num =Math.floor(num/10);
}
console.log(total);




