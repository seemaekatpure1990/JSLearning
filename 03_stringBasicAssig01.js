console.log("============(1) no arg , no return value===================");

function stringBasic() {

    console.log("My dream company is : Google");
    
}
stringBasic();

console.log("============(2)===================");

 function myHobbies( hobby1,hobby2,hobby3) {
     console.log(hobby1,hobby2,hobby3);
     var length1=hobby1;
     var totalLength1=hobby1.length;
     var length2=hobby2;
     var totallength2=hobby2.length;
     var length3=hobby3;
     var totallength3=hobby3.length;
     var result=totalLength1+totallength2+totallength3;
     console.log("Total lenght of hobbies : ",result);



    
}
myHobbies("Reading","Drawing","Programming");
