

function Bank(bankName,location,ifscCode,BranchCode){
   this.bankName = bankName;
    this.location = location ;
    this.ifscCode = ifscCode;
    this.BranchCode = BranchCode
}
const yesBank=new Bank("yesBank","pune",123456,112233);
console.log(`Bank Details : Bank Name = ${yesBank.bankName} || Bank location = ${yesBank.location} || Bank IfscCode = ${yesBank.ifscCode} || Bank Branch Code = ${yesBank.BranchCode}`);

const sbiBank =new Bank("sbiBank","sangola",1234564,445566);
console.log(`Bank Details : Bank Name = ${sbiBank.bankName} || Bank location = ${sbiBank.location} || Bank IfscCode = ${sbiBank.ifscCode} || Bank Branch Code = ${sbiBank.BranchCode}`);

const mahBank =new Bank("mahBank","solapur",12345647,778899);
console.log(`Bank Details : Bank Name = ${mahBank.bankName} || Bank location = ${mahBank.location} || Bank IfscCode = ${mahBank.ifscCode} || Bank Branch Code = ${mahBank.BranchCode}`);

const axisBank =new Bank("axisBank","Kolhapur",123456478,114477);
console.log(`Bank Details : Bank Name = ${axisBank.bankName} || Bank location = ${axisBank.location} || Bank IfscCode = ${axisBank.ifscCode} || Bank Branch Code = ${axisBank.BranchCode}`);

console.log(`============================================================================================================`);
console.log(` ==Added new data member 'openTime' && 'closeTime' ==`);
Bank.prototype.openTime = " 9 AM IST " ;
Bank.prototype.closeTime = " 6 PM IST ";

console.log(`==Log the openTime and closeTIme of object sbiBank==`);

console.log(`Open Time of object sbiBank is :== ${sbiBank.openTime}`);
console.log(`Close Time of object sbiBank is :== ${sbiBank.closeTime}`);

console.log(`=============================================================================================================`);
console.log(`==Log the bankName and closeTime==`);

console.log(`Bank Name :== ${axisBank.bankName} and Close Time :==${axisBank.closeTime}`  );
console.log(`=============================================================================================================`);
console.log(`==Log the bankName , BranchCode and openTime==`);
console.log(`Bank Name :== ${yesBank.bankName} , Branch Code :== ${yesBank.BranchCode}  and Open Time :== ${yesBank.openTime}`);



