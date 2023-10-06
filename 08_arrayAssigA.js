
const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`array element are : "Banana","Orange","Apple","Mango","Water Melon"`);
console.log(`========= 1 =========`);
console.log(`First Array element is : ${arrayFruits[0]}`);
console.log(`Last Array element is : ${arrayFruits[arrayFruits.length-1]}`);

console.log(`========== 2 ==========`);
arrayFruits.unshift("Papaya");
console.log(`Add the element "Papaya" before "Banana" : ${arrayFruits}`);

console.log(`========== 3 ==========`);
var removedElements=arrayFruits.splice(4,1);
console.log(`Remove  "Mango" from array : ${removedElements}`);

console.log(`========== 4 ==========`);
arrayFruits.push('Pineapple');
console.log(`Add element "Pineapple" at last position : ${arrayFruits}`);

console.log(`========== 5 ==========`);
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`Insert"Dragon Fruit" before "Water melon" : ${arrayFruits}`);

console.log(`========== 6 ==========`);
arrayFruits.splice(2,1,"Kiwi");
console.log(`Replace an element "Orange" with "Kiwi" : ${arrayFruits}`);

console.log(`========== 7 ==========`);
 var sliceEle=arrayFruits.slice(1,4)
console.log(`Elements starting from index 1 to 4 is :${sliceEle}`);

console.log(`========== 8 ==========`);
 var lastEle =arrayFruits.slice(arrayFruits.length-3);
console.log(`Last 3 elements : ${lastEle}`);




