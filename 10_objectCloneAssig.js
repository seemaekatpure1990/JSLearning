

let personalDetails = {
   firstName : "Seema" ,
   lastName : "Ekatpure",
   graduation : "BCS",
   mobileNo : 9623452007
}

let collegeDetails ={
    clgName : "Sangola College Sangola",
    location : "Sangola",
    totalDepartment : 7,
    university: "Solapur"
 }
  Object.assign(personalDetails,collegeDetails);
console.log(`merged personalDetails and collegeDetails : ==>`);
console.table(personalDetails);

console.log(`===============================================================`);
console.log(`====Create array and freeze it ===== `);
const arrayFriends = ["Aarti" ,"Manisha","Archana","Gayatri"];
Object.freeze(arrayFriends);
console.log(arrayFriends);

console.log(`===============================================================`);
console.log(`==Iterate array using for of loop ====`);

for (const element of arrayFriends) {
    console.log(element);
}
console.log(`===============================================================`);
  console.log(`Given string is : "Codeminde Technology" `);
  console.log(`Write code to reverse only word Technology ==> ygolonhceT `);
  const company = 'Codeminde  Technology';
  let reverse ="";
  for (let index = company.length-1; index >=0; index--) {
         let char =company.charAt(index);
    if (char==' ') {
        break;
    } else {
        reverse=reverse + char;
    }

  }
  console.log(reverse);

