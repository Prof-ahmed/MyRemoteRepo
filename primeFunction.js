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