
var str= "I am very good IT Developer";
var count =0;
var vowelsCap="AEIOU";
for (let index = 0; index < str.length -1; index++) {
    var char= str.charAt(index).toUpperCase();
if (vowelsCap.includes(char)) {
    count=count+1;
}
    
}
console.log(`Total no of vowels are : ${count}`);

console.log(`=============================================`);
var result=0;
for (let index = 1; index <= 5; index++) {
 result=result+ index *index*index;    
}
console.log(`1*1*1 + 2*2*2 + 3*3*3* + 4*4*4* + 5*5*5*`);
console.log(`Sum of Cube of numbers from 1 to 5 is : ${result}`);

console.log(`==============================================`);
var result=" ";
function oddPositionedChars(str) {
    for (let index = 0; index <=str.length-1; index++) {
        if (index%2!=0 && str.charAt(index)!=" ") {
            result=result  + str.charAt(index)+"  ";
            console.log(str.charAt(index));

        }
    }
}
console.log(`Given String odd positioned char is :  `);

oddPositionedChars("Hard work always pays back");

console.log(`=============================================`);
console.log(`Given String odd positioned char is :  `);

oddPositionedChars("Soon I will be UI IT Champ");


