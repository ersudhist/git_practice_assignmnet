let number = 5;
let factor =0;
for(let i=1 ; i<=number;i++){
if(number%i==0){
factor++;
}
}
if(factor==2){
console.log("prime number");
}
else{
console.log("not a prime number");
}