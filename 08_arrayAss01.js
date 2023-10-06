
let arrayNumbers=[22,11,44,55,77,33];
console.log(`Given ARRAY : [22,11,44,55,77,33]`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 2==0) {
        console.log(`Even positioned values are : ${element}`); 
    }
   
}

console.log(`==============================`);
console.log(`Given ARRAY : [22,11,44,55,77,33]`);
var sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum=sum+element;
}
console.log(`sum of array elements : ${sum}`);

