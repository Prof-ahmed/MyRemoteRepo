let num = Number(123);
//sum of digits = 6
let total =Number(0);
while(num>=1){
    total +=num%10;
    num =Math.floor(num/10);
}
console.log(total);