console.log(`===================== Assignment 2 =======================`);

function greaterNumber(n1,n2) {
    var num1=n1;
    var num2=n2;
    result=num1>num2?num1:num2;

    console.log(`given values are ==>${n1} ${n2}`);
    console.log(`Greater no is ==>${result}`);
    
}
var result= greaterNumber(10,-10);
console.log(`-----------------------------------------`);
var result=greaterNumber(800,899);
console.log(`-----------------------------------------`);

function isEvenOrOddNum(value) {
    var num=value;
    var result=value%2==0?"Even" : "Odd";
    console.log(`Given no is ${num}==>${result}`);
    
}
var result=isEvenOrOddNum(29);
console.log(`-----------------------------------------`);
var result=isEvenOrOddNum(44);
console.log(`-----------------------------------------`);
var result=isEvenOrOddNum(0);
console.log(`-----------------------------------------`);
var result=isEvenOrOddNum(101);
console.log(`-----------------------------------------`);

function wordLength(word) {
    var str= word.length;
    var result=word.length%2==0?"Even" : "Odd";
    console.log(`Length of ${word} is ="${str}" then it is ==>${result}`);

}
var result =wordLength("JavaScript");
console.log(`-----------------------------------------`);
var result =wordLength("Developer");
console.log(`-----------------------------------------`);
var result =wordLength("Google");
