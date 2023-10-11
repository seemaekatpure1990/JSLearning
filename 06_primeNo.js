
function primeNumber (num){
  let flag=true;
  for(let index =2 ; index<=num-1;index++){
    if (num % index ==0) {
        flag=false;
        break;
    }
  }
  if (flag==true) {
    console.log(`Given number is prime ${num}`);
  }
  else{
    console.log(`Given number is Not prime ${num}`);

  }
}
primeNumber(2);
primeNumber(4);
primeNumber(11);
primeNumber(15);

