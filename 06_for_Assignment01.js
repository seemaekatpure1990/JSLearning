console.log(`=================== step 1 =====================`);
// no from 5 to 15 by increasing 1
for (let index = 5; index <=15; index++) {
    console.log(index);
    
}
console.log(`=================== step 2 =====================`);
// no from 50 to 40 by descending by 1 
for (let index = 50; index >=40; index--) {
    console.log(index);
}

console.log(`=================== step 3 =====================`);
//  find 1st 15 odd no
for (let index = 1; index <=30; index=index+2) {
    console.log(index);
}
console.log(`=================== step 4 =====================`);
//  find 1st 10 even no
for (let index = 2; index <=20; index=index+2) {
    console.log(index);
}
console.log(`=================== step 5 =====================`);
//  print table of 5 like--->5 10 15...50
for (let index = 5; index <=50; index=index+5) {
    console.log(index);
}   
console.log(`=================== step 6 =====================`);
// print table of 10 like ----->10 20 30 ..100
var result=" ";
for (let index = 10; index <=100; index=index+10) {
    result=result+index+" ";
}  
console.log(result); 

console.log(`=================== step 7 =====================`);
// print table of 10 in reverse order like ----->100 90 80 ....10
var result= " ";
for (let index = 100; index >=10; index=index-10) {
    result=result+index +" ";

}   
console.log(result);