let number = 3;
let div=0;
for(let i=1;i<=number;i++){ //block / body
    if(number%i==0){
        div++;
    }
}
if(div == 2){
    console.log("prime");
}
else{
    console.log("not prime");
}