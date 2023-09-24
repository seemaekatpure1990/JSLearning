

console.log(" ====== function with no arguments and no return type ===== ");

function word () {
    console.log(" Hello Seema");
    console.log(" I love Angular");
}
word();

console.log(" ====== function with  arguments and no return type ===== ");

function personalDetails(firstName,lastName,collegeName) {

 console.log( "First Name :=",firstName );
    console.log("Last Name :=",lastName);
    console.log("College Name :=",collegeName);
}
personalDetails("Seema","Ekatpure","Sangola College Sangola");
    

console.log(" ====== function with  arguments and no return type ===== ");


function swapValues(valueOne,valueTwo)
{
console.log("====before swap===",valueOne,valueTwo);
var temp=valueOne;
valueOne=valueTwo;
valueTwo=temp;
console.log("====after swap====",valueOne,valueTwo);

}
swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log(" ====== function with  arguments and return type ===== ");

function addThreeValues(numOne,numTwo,numThree)
{
var result=numOne+numTwo+numThree;
return result;
}
var addition=addThreeValues(10.23,600,40);
console.log("Addition of numbers 10.23,600,40 :=",addition);
var word=addThreeValues("Hello","   Good","  Morning");
console.log("Addition of 3 words :=", word );