var  leapYear= function (year) {
   if (year%4==0 || year%400==0 ||year%100==0 ) {
    console.log(`Given year is leap :${year}`);
   } else {
    if (year=" " ) {
        console.log(`Invalid data :${year}`);
    } else {
        console.log(`Given year not leap year${year}`);
    }
}
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(1945);
leapYear(null);
leapYear("Twenty twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);