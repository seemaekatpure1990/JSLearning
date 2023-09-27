
function squareOfWordLength(str) {
    console.log(`Given string is ==> ${str}`);
    var lengthOfStr = str.length;
    console.log(`The length of string is ==>${str.length}`);
    var result=str.length ** 2;
    console.log(`The length square of string is ==>${result}`);
    return result;
}
console.log(`===================== Assignment 1 =======================`);
console.log(`=========== 1 ============`);
console.log(`----1.1----`);
 var result=squareOfWordLength("JavaScript");

console.log(`----1.2----`);
 var result=squareOfWordLength("Google Chrome");

console.log(`----1.3----`);
 var result =squareOfWordLength("Developer Smart");

console.log(`=========== 2 =============`);

function givenStr() {
var str= "I am Angular Developer";
console.log(`Given string is ==> "I am Angular Developer"`);
var strLength = str.length;
console.log(`length of given string is ==> ${strLength}`);
var word=str.split (" ");
console.log(` Given string is ==> ${word}`);
console.log(`Total no of words in given string is ==>${word.length}`);
var wordlength=word.length;
var result=strLength/wordlength;
console.log(`-------------------------------------`);
console.log(`After division total no in given string is ==>${result}`);
console.log(`-------------------------------------`);

var result =strLength*wordlength;
console.log(`After multiplication total no in given string is ==>${result}`);




}
givenStr();

