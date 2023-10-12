
let bankSbi={
    branchName : "Akluj",
    managerName : "Mr. Pawar",
    ifscCode : 12345,
    accountNo :123456789964,
}
let bankLocation = {
    street : "Velapure Road",
    city : "Akluj",
    pinCode : 413101
}
console.log(`=================================== Step 1 =====================================`);
console.log(`Create an object bankSbi : ==>`);
console.log(bankSbi);
console.log(`=================================== Step 2 =====================================`);

console.log(`Create an object bankLocation : ==>`);
console.log(bankLocation);
console.log(`=================================== Step 3 =====================================`);

console.log(`=== clone the bankSbi and bankLocation object using : Object.assign()=== `);
 Object.assign(bankSbi,bankLocation);
 console.table(bankSbi);

 console.log(`=== clone the bankSbi and bankLocation object using : Spread Operator === `);

const details ={...bankSbi,...bankLocation}
console.table(details);
console.log(`=================================== Step 4 =====================================`);

let rateOfInterest ={
    homeLoanInterest : 12  ,
    personalLoanInterest :15,
    dueInterest :10
}

console.log(`===Merge bankSbi ,bankLocation and rateOfInterest object into  :  sbiDetails  === `);
const sbiDetails = Object.assign(bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);
console.log(`=================================== Step 5 =====================================`);
console.log(`=== Traverse the merged object sbiDetails using for in loop ===`);
for (const key in sbiDetails) {

       console.log(key,'--', sbiDetails[key]);
        
    }

