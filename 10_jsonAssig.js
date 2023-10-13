
const employeeInfo = `{
"name" :"Aleix Melon",
"id" : "E00245",
"role" : ["Dev","DBA"],
"age" : 23,
"doj" : "11-12-2019",
"married" : false,
"address" :{
    "street" :"32,Laham St.",
    "city" : "Innsbruck",
    "country" :"Austria"
},
"referred-by" : "E0012"
}`;
console.log(`==== Converted given details into object ====`);
const info = JSON.parse(employeeInfo) ;
console.table(info);
console.log(`=========================================================================================================`);
const details= info.role[0];
console.log(`logging the Dev from array role : ===> ${details}`);
console.log(`=========================================================================================================`);
const arraySplit = info.name.split(" ");
console.log(`Logged only last name by using split method :===>${arraySplit[1]}`);
console.log(`=========================================================================================================`);
console.log(`====== logged only joinings year of employee ======  `);
const date =new Date(info.doj);
console.log(`logged only joinings year of employee:===>${date.getFullYear()}`);
