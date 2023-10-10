console.log(`===============  step 1 =============================`);
console.log(`Class Vehicle with 5 Properties`);

class Vehicle {
    brandName
    color
    fuel
    chasiNumber
    average
    
    constructor (brandName,color,fuel,chasiNumber,average) {
        this.brandName =brandName ;
        this.color = color;
        this.fuel = fuel;
        this.chasiNumber = chasiNumber;
        this.average =average;
        }
    }
    const vehicle1 = new Vehicle ('Honda' ,'White','Disel',1234,27);
    
    const vehicle2 = new Vehicle('Maruti','White','Petrol',12345,21);
  
    const vehicle3 =  new Vehicle('Bajaj','Black','Disel',12345,25);
  
    const vehicle4 = new Vehicle('Honda','Blue','Petrol',123456,23);
  
    const vehicle5 = new Vehicle('Honda','Gray','Disel',1234567,25);
console.log(`============= Traversing an Array ===============`);
    const arrayOfVehicles = [vehicle1,vehicle2,vehicle3,vehicle4,vehicle5];
    for (const Vehicle of arrayOfVehicles) {
        console.log(`Vehicle Brand Name : ${Vehicle.brandName} || Vehicle Color : ${Vehicle.color} || Vehicle Fuel Type  : ${Vehicle.fuel} || Vehicle Chasi Number : ${Vehicle.chasiNumber} || Vehicle Average : ${Vehicle.average}`);
        
    }  
    
console.log(`============== step 2 ================`);
console.log(`Class College with 4 Properties`);

class College {
    name 
    address
    university
    pinCode
 
    constructor ( name,address,university,pinCode){
            this.name = name;
            this.address =address;
            this.university = university;
            this.pinCode = pinCode;
    }
    display(){
        console.log(`Display : Collage Name : ${this.name} ||  Address :${this.address} || University :${this.university} || PinCode :${this.pinCode}`);
    }
}
const college1 = new College ('Sangola College Sangola','Sangola','Solapur',1234);
const college2 = new College ('Bharti Vidaypith','pune','pune',1234);
const college3 = new College('D Y Patil','pune','pune',1234);
const college4 = new College('Symboisis','pune','pune',1234);


const arrayAllCollege = [college1,college2,college3,college4];
for (const College of arrayAllCollege) {
     College.display();
}
 console.log(`==================== Step 3 ========================`);
 console.log(`============== traversing an Array============`);
 function traverseObject(objectCollege ){
for (const key in objectCollege) {
        const element = objectCollege[key];
        console.log(`${key}  ==> ${element}`);
        
    }
}            
        
    
      traverseObject(college1);
      console.log(`=========================`);
      traverseObject(college2);
      console.log(`=========================`);
      traverseObject(college3);
      console.log(`=========================`);
      traverseObject(college4);
 



