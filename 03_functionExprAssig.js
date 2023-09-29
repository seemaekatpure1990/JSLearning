
var square = function(value) {
    return value * value
}
console.log(`============================= Assignment 1 ================================`);
console.log(`------------- 1 and 2----------------`);
var result = square(5);
console.log(`Square of 5 is : ${result}`);
console.log(`Type of function Expression is : `,typeof square);
var result =square(6);
console.log(`Square of 6 is : ${result}`);
console.log(`Type of function Expression is : `,typeof square);
var result =square(25);
console.log(`Square of 25 is : ${result}`);
console.log(`Type of function Expression is : `,typeof square);
var result =square(100);
console.log(`Square of 100 is : ${result}`);
console.log(`Type of function Expression is : `,typeof square);
var result =square(67);
console.log(`Square of 67 is : ${result}`);
console.log(`Type of function Expression is : `,typeof square);
var result =square(89);
console.log(`Square of 89 is : ${result}`);
console.log(`Type of function Expression is : `,typeof square);
var result =square(59);
console.log(`Square of 59 is : ${result}`);
console.log(`Type of function Expression is : `,typeof square);

console.log(`---------------- 3 ------------------`);
var rectangle = function(length,width){
 var result= length*width;
 return result;
} 
var result= rectangle(499,917);
console.log(`Area of rectangle plot is : ${result}`);
console.log(`Type of function Expression is : `,typeof rectangle );

console.log(`---------------------- 4 ------------------------`);

var swapValues = function(value1 ,value2) {
 var temp =value1;
 console.log(`Before swap values are : `,value1,value2);
  value1=value2;
 value2=temp;
 console.log(`After swap values are : `,value1,value2);
}
swapValues("Mahi","Raina");
swapValues(55,77);

console.log(`------------------------- 5 ---------------------------`);

var givenstr = function(str){
var totalLength= str.length;
console.log(`Total char available in strinG is :` ,totalLength);
var charAt6= str.charAt(6);
console.log(`The char at index 6 is: `, charAt6);
var charAt12= str.charAt(12);
console.log(`The char at index 12 is: `, charAt12);
 var lastIndexChar=str.charAt(str.length-1);
 console.log(`Tne last char of string is : `,lastIndexChar);
 var firstchar=str.charAt(0);
 console.log(`The first char of string is : `,firstchar);
 var thirdLastIndexChar = str.charAt(str.length-3);
 console.log(`The thirdlast char of string is : `,thirdLastIndexChar);
var  word=str.split(" ");
var totalWords=word.length;
console.log(`Total no of words are :` ,word);
console.log(`Total no of words are :`,totalWords);
var square= totalWords * totalWords;
console.log(`Square of string (7) is :`,square);


}
givenstr("JS the most popular language of internet");


