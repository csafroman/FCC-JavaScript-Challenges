function convertToRoman(num) {
  /* declare 2 arrays, one  with the decimal numbers and second with their roman equivalents. 
  Both the arrays should have matching indices. */
  var decimalVal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanVal = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  // declare a third variable as an empty string which will contain the converted roman numeral.
  var roman = '';
  //run a for loop to iterate through every element of decimalVal.
  for(i=0;i<decimalVal.length;i++){
    // run a while loop which will execute as long as the element of decimalVal is <= num
    while(decimalVal[i]<=num){
      // add the element at index 'i' of romanVal to the variable 'roman'
      roman += romanVal[i];
      reduce num by the decimalVal equivalent.
      num -= decimalVal[i];
    }
  }
  return roman; //return the value of 'roman'
}