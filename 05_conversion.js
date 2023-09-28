

var n1 = "20";
var n2 = 20;
console.log(n1==n2); 
console.log(n1, typeof n1);
n1=+n1;
console.log(n1, typeof n1);

console.log('4'-true);
console.log(`Ans: '4' implicit converted  to 4(number) and true (Boolean)`);


console.log(`Explicite conversion`);
//String to number 
//1.Using +  operator
//2. Number 
console.log(`for converting any data type to (number) use (Number) constructor`);
var n1="20";
var n2=Number(n1);
console.log(n2 ,typeof n2);
var isMarried=true;
var result=Number(isMarried);
console.log(result,typeof result);

console.log(`===========================`);
console.log(`for converting any data type to (string) use(String)  constructor`);

var n4 =30;
var result=String(n4);
console.log(result,typeof result);

console.log(`=============================`);
console.log(`for converting any data type to (boolean) use(Boolean)  constructor`);

var result =Boolean("jenny");
console.log(result,typeof result);

// number to boolean
var result =Boolean(1);
console.log(result,typeof result);

//0 or empty space or string  is - false 
// all no and string are -true