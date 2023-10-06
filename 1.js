var count =0;
var countCharA = function(str) {
    for (let index = 0; index < str.length; index++) {
        if (str.charAt(index)=="a" || str.charAt(index)== "A") {
            count = count +1;
        }
        
    } 
    console.log(The given String is : ${str});   
    console.log(The total count of 'a' & 'A' is: ${count});
}

countCharA("I AM Learning JavaScript, The Language of Internet");
