
let bankSbi={
 branchName :  'Akluj',
 branchIfscCode : 1234,
 branchManager :  'Mr.patil',
 accountNo : 12345678
}
console.log(`Create the object-->'bankSbi'using literals with 4 properties `);
console.table(bankSbi);
console.log(`===========================================================================================`);

console.log(`Create the object-->'bankLocation'using literals  properties  : street,city,pin`);

let bankLocation={
    street :  'Sangola Road',
    city : 'Akluj',
    pin : 413101
}
console.table(bankLocation);
console.log(`clone step 1-'banksbi; and Step 2-'bankLocation'objects`);

const bankClone=Object.assign({},bankSbi,bankLocation);
console.log(bankClone);
console.log(`===========================================================================================`);

console.log(`Create the object-->'rateOfInterest' with literals  properties `);

let rateOfInterest ={
    homeLoanInterest : 12,
    personalLoanInterest : 10,
    dueInterest :  8
}
console.table(rateOfInterest);
console.log(`===========================================================================================`);

console.log(`merge step 1 ,step 2 and step 4 objects into new object ==> 'sbiDetails'`);
const sbiDetails=Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);
console.log(`===========================================================================================`);

console.log(`traverse the sbiDetails objects using 'for in loop'`);
for (const key in sbiDetails) {
     console.log(key ,sbiDetails[key]);
        
    }



