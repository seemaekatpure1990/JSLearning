
var count =0;
  var countChar=function (str) {
   for (let index = 0; index < countChar.length; index++) {
  if (str.charAt(index)=='a' || str.charAt(index)=='A') {
    count=count+1;
  }
  console.log(`Given String is : ${str}`);
    console.log(`The total numbers of 'a 'and 'A' are : ${count}` );
   }
  
   } 
countChar("I AM Learning ,The Language of internet");
countChar("My favorite movie is LAggAn ");
    
