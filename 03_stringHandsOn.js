

console.log(`=========Assignment 2=========`);

function stringHandsOn() {
    var givenStr="   Hey you are doing good, keep it up    ";
    console.log(`1.Given string is ${givenStr}`);
    console.log(`2.string length is ${givenStr.length}`);
    var beforeTrim=givenStr.length;
    var result=givenStr.trim();
    console.log( `3. Given string after trim is  ==> ${result}`);

    console.log(`.string after trim ${result.length}`);
    var afterTrim=result.length;
    var trimResult = beforeTrim-afterTrim;
    console.log(`4.Total number of spaces removed  is ${trimResult}`);
    var charAt0=result.charAt(0);
    var lastIndexChar=result.charAt(result.length -1);
    console.log(`5. first char after trim is == ${charAt0}  || Last char after trim is == ${lastIndexChar}`);
    var words=result.split(" ");
    console.log(`6.Total word in string is == ${words.length}`);
    var indexOfGood=givenStr.indexOf('good');
    console.log(`7.Index of word good is ==${indexOfGood}`);
    var result1=givenStr.substring(26);
    console.log(`8.Substring starting from index 26 is ==${result1}`);
    var result=givenStr.trim();
    var endWith =result.endsWith('up');
    console.log(`9.String ends with word 'up' ==${endWith}`);
    var startWith=result.startsWith('Hey');
    console.log(`10.String starts with word 'Hey' == ${startWith}`);

}
stringHandsOn();